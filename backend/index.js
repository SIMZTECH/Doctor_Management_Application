import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import doctorRoute from './routes/doctor.js';
import reviewRouter from './routes/review.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin:true
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute); //domain for api/v1/auth/register
app.use('/api/v1/users',userRoute); 
app.use('/api/v1/doctors',doctorRoute); 
app.use('/api/v1/reviews',reviewRouter); 

// database connection
mongoose.set('strictQuery',false);

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        console.log("Mongo database connected successfully");
    } catch (error) {
        console.log("Failed to connect to Mongo database");
    }
}

app.get('/',(req,res)=>{
    res.send("Api working");
});

app.listen(port,()=>{
    connectDB();
    console.log("Server started successfully on port:"+port);
});