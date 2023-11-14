import Jwt  from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async(req,res,next)=>{
    const authToken = req.headers.authorization;

    if(!authToken || !authToken.startsWith('Bearer')){
        res.status(404).json({
            status:false,
            msg:"No token, authorization denied"
    })};
    
    try {

        const token = authToken.split(" ")[1];
        const decoded = Jwt.verify(token,process.env.JWT_SECRET_KEY);

        req.userId = decoded.id;
        req.role = decoded.role;

        next(); //call this othwise it will not work
    } catch (error) {
        if(error.name === 'TokenExpiredError'){
            return res.status(401).json({
                success:false,
                mesg:"Token is expired"
            });
        };
    };

};

export const restrict = roles=> async(req,res,next)=>{
    const userId = req.userId;

    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if(patient){
        user=patient;
    }

    if(doctor){
        user=doctor;
    }

    if(!roles.includes(user.role)){
        return res.status(401).json({
            success:false, 
            message:"You are not authorized"
        })
    }

    next();
};