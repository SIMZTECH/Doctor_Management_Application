import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


async function checkUserExist(req){
    const {role,email} = req.body;
    var user = null;
  
    if (role ==="patient") {
      user = await User.findOne({email:email});
    }
    if(role ==="doctor"){
      user = await Doctor.findOne({email:email});
    }
   return user;
  };

async function saveModel(req){
    var newUser = null;
    const {password,name,role,email,photo} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt);

    if(req.body.role==="patient"){
            newUser = new User({
                name:name,
                email:email,
                password:hashPassword,
                role:role,
                photo:photo
            });
    }

    if(req.body.role==="doctor"){
        newUser = new Doctor({
            name:name,
            email:email,
            password:hashPassword,
            role:role,
            photo:photo
        });
    }

    return newUser.save();
};

export const register = async(req,res)=>{ 

    try {
        // // check if user exists
        if (await checkUserExist(req)!=null) {

           res.send({
            status: 404,
            message: "user already exist",
            _foundUser: await checkUserExist(req),
           });

        }else{
            // save data
            await saveModel(req).then((_object)=>{
                res.send({
                    status:200,
                    success:true,
                    message:"newUser successfully created",
                    _object:_object,
                });
            }).catch((error)=>{
                res.send({
                    status:500,
                    success:false,
                    message:"failed to save",
                    error:error,
                });
            });
        };

    } catch (error) {
        res.send({
            status:500,
            success:false,
            message:"internal server down, try again",
        });
    }
};

const generateToken=(user)=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,
        {
            expiresIn:"15d"
        })
}

export const login = async(req,res)=>{

    try {
        var user = null;
        const patient = await User.findOne({email:req.body.email});
        const doctor = await Doctor.findOne({email:req.body.email});

        if(patient){
            user=patient;
        };

        if(doctor){
            user=doctor;
        };

        // check if user not exists
        if(!user){
            return res.status(404).json({
                msg:"User does not exist"
            });
        }

        // compare password matching
        const isPasswordMatched = await bcrypt.compare(req.body.password, user.password);  
        
        if(!isPasswordMatched){
            return res.status(400).json({
                status:false,
                msg:"Invalid credentials"
            });
        };

        // // generate Token key
        const token = generateToken(user);
        const {password, role, appointments, ...rest} = user.toJSON();

        return res.status(200).json({
            status:true,
            msg:"Success",
            token,
            data:{...rest},
            role
        });
        
    } catch (error) {
        res.status(500).json({
            status:false,
            msg:"Failed to login",
            _error:error
        });
        
    }
};