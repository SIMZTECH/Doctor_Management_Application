import express from "express";
import { 
    updateDoctor,
    deleteDoctor,
    getAllDoctors,
    getSingleDoctor, 
    getDoctorProfile
} from "../controllers/doctorController.js";
import { restrict,authenticate} from "../auth/verifyToken.js";
import reviewRoute from '../routes/review.js';
const router = express.Router();

// nested route
router.use("/:doctorId/reviews",reviewRoute);

router.get("/",getAllDoctors);
router.get("/:id",authenticate,getSingleDoctor);
router.delete("/:id",authenticate,restrict(["doctor"]),deleteDoctor);
router.put("/:id",authenticate,restrict(["doctor"]),updateDoctor);
router.get("/profile/me",authenticate,restrict(["doctor"]),getDoctorProfile);



export default router;