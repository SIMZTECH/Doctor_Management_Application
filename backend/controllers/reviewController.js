import Reviews from "../models/ReviewSchema.js";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const getAllReviews = async(req,res)=>{
    try {
        const reviews = await Reviews.find({});
        if(reviews.length>0){
            res.status(200).json({
                status:true,
                msg:"All reviews retrieved successfully",
                _data:reviews
            });
        }else{
            res.status(404).json({
                status:false,
                msg:"No reviews found",
            });
        }
    } catch (error) {
        res.status(401).json({
            status:false,
            msg:"Failed to retrieve reviews",
            _error:error
        }); 
    }
};

export const createReview = async(req,res)=>{
    // check if request contains doctor and user
    if(!req.body.doctor){
        req.body.doctor = req.params.doctorId;
    };

    if(!req.body.user){ 
        req.body.user = req.userId;
    };

    const newReview = new Reviews(req.body);
    console.log(req.params.doctorId);
    console.log(newReview);

    try {
        await newReview.save()
            .then(async (saved) => {
                // update the reference to this.
                await Doctor.findByIdAndUpdate(req.body.doctor, {
                    $push: { reviews: saved._id }
                });

                res.status(200).json({
                    status: true,
                    msg: "Review submitted successfully",
                    _data: saved
                });
            })
        .catch((error)=>{
            res.status(404).json({
                status:false,
                msg:"Review submitted successfully",
                _error:error
            });
        });

    } catch (error) {
        res.status(404).json({
            status:false,
            msg:"Failed to submit review",
            _error:error
        });
    };

};