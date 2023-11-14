import User from "../models/UserSchema.js";
import Bookings from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser=async(req,res)=>{
    const id = req.params.id;
    try {
        // update user by id
        const updatedUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({
            status:true,
            mesg:"User updated successfully",
            _data:updatedUser 
        });
    
    } catch (error) {
        res.status(500).json({
            status:false,
            mesg:"Failed to update user",
            _eror:error
        }); 
    };
};

export const deleteUser=async(req,res)=>{
    const id = req.params.id;
    try {
        // delete user by id
        await User.findByIdAndDelete(id);
        res.status(200).json({
            status:true,
            mesg:"User deleted successfully",
        });
    
    } catch (error) {
        res.status(500).json({
            status:false,
            mesg:"Failed to delete user",
            _eror:error
        }); 
    };
};

export const getSingleUser=async(req,res)=>{
    const id = req.params.id;
    try {
        // find one user by id
        const foundUser = await User.findById(id).select("-password");
        res.status(200).json({
            status:true,
            mesg:"One user found",
            _data:foundUser
        });
    
    } catch (error) {
        res.status(404).json({
            status:false,
            mesg:"Failed to find user",
            _eror:error
        }); 
    };
};

export const getAllUsers=async(req,res)=>{
    try {
        // find all users
        const users = await User.find({}).select("-password");
        res.status(200).json({
            status:true,
            mesg:"All users found",
            _data:users
        });
    
    } catch (error) {
        res.status(404).json({
            status:false,
            mesg:"Not Found",
            _eror:error
        }); 
    };
};

export const getUserProfile=async(req,res)=>{
    const id=req.userId;

    try {
        const user = await User.findById(id); 
        if(!user){
            res.status(404).json({
                success:false,
                message:"user does not exists"
            });
        }else{

            const {password,...rest} = user.toJSON();

            res.status(200).json({
                success:true,
                message:"Getting user profile infor",
                data:{...rest}
            });
        }
        
    } catch (error) {
        res.status(500).json({
            status:false,
            mesg:"Something went wrong, cannot get profile",
            _eror:error
        }); 
    }
};

export const getMyAppointments=async(req,res)=>{

    try {

        // step1 get appointments from bookings for specific users
        const bookings = await Bookings.find({user:req.userID});
        // step2 retrive doctors ids from appointments
        const doctorIds = bookings.map(el=>el.doctor.id);
        // step3 retrieve doctors using doctor ids
        const doctors = await Doctor.find({_id:{$in:doctorIds}}).select("-password");

        res.status(200).json({
            success:true,
            message:"Getting appointments with doctors",
            data:doctors
        });
        
    } catch (error) {
        res.status(500).json({
            status:false,
            mesg:"Something went wrong, cannot get appointments",
            _eror:error
        }); 
        
    }
};