import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    name:{type:String,required:true},
    phone:{type:Number},
    photo:{type:String},
    role:{
        type:String,
        enum:["patient","admin"],
        default:"patient"
    },
    gender:{
        type:String,
        enum:["male","female","other"]
    },
    bloodType:{type:String},
    appointments:[{
        type:mongoose.Types.ObjectId,//join with id
        ref:"Appointment"
    }],

});


const User = mongoose.model("User",userSchema);

export default User;