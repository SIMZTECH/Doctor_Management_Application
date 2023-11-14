import Bookings from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor=async(req,res)=>{
    const id = req.params.id;
    try {
        // update Doctor by id
        const updatedDoctor = await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true});
        res.status(200).json({
            status:true,
            mesg:"Doctor updated successfully",
            _data:updatedDoctor
        });
    
    } catch (error) {
        res.status(500).json({
            status:false,
            mesg:"Failed to update Doctor",
            _eror:error
        }); 
    };
};

export const deleteDoctor=async(req,res)=>{
    const id = req.params.id;
    try {
        // delete Doctor by id
        await Doctor.findByIdAndDelete(id);
        res.status(200).json({
            status:true,
            mesg:"Doctor deleted successfully",
        });
    
    } catch (error) {
        res.status(500).json({
            status:false,
            mesg:"Failed to delete Doctor",
            _eror:error
        }); 
    };
};

export const getSingleDoctor=async(req,res)=>{
    const id = req.params.id;
    try {
        // find one Doctor by id
        const foundDoctor = await Doctor.findById(id)
        .populate("reviews")
        .select("-password");
        
        if(foundDoctor){
            res.status(200).json({
                status:true,
                mesg:"Record found",
                _data:foundDoctor
            });
        }else{
            res.status(404).json({
                status:false,
                mesg:"No record found",
            });
        }
    
    } catch (error) {
        res.status(404).json({
            status:false,
            mesg:"Failed to find Doctor",
            _eror:error
        }); 
    };
};

export const getAllDoctors=async(req,res)=>{
    try {
        // we filter doctors by name and specialization
        const {query} = req.query;

        let _doctors = null;

        if(query){
            _doctors = await Doctor.find({
                isApproved:"approved",
                $or:[
                    {name:{$regex:query,$option:"i"}},
                    {specialization:{$regex:query,$option:"i"}}
                ]
            }).select("-password");
        }else{
            _doctors = await Doctor.find({isApproved:"approved"}).select("-password");
        };

        res.status(200).json({
            status:true,
            mesg:"All Doctors found",
            _data:_doctors
        });
    
    } catch (error) {
        res.status(404).json({
            status:false,
            mesg:"Not Found",
            _eror:error
        }); 
    };
};

export const getDoctorProfile=async(req,res)=>{
    const doctorID=req.userId;

    try {
        const doctor = await Doctor.findById(doctorID); 
        if(!doctor){
            res.status(404).json({
                success:false,
                message:"doctor does not exists"
            });
        }else{

            const {password,...rest} = doctor.toJSON();
            // get all doctor appointments
            const appointments = await Bookings.find({doctor:doctorID});

            res.status(200).json({
                success:true,
                message:"Getting doctor profile infor",
                data:{...rest,appointments}
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