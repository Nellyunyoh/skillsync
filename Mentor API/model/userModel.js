import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    id: {
        type: String,
        required: true,
        unique: true
    },

    phoneNumber : {
        type: String,
        required: true
    },

    assignedIntern : {
        type: String,
        required: true 
    },
});

const Mentor = mongoose.model("Mentor", mentorSchema);
export default Mentor;