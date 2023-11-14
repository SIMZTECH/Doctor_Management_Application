import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Types.ObjectId,//join with Doctor Model
        ref: "Doctor",
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,//join with user model
        ref: "User",
        required: true,
    },
    ticketPrice: { type: String, required: true },
    appointmentDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "cancelled"],
        default: "pending",
    },
    isPaid: {
        type: Boolean,
        default: true,
    }
},
    { timestamps: true }
);

const Bookings = mongoose.model("Booking",bookingSchema);

export default Bookings;