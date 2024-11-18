import mongoose from "mongoose";

const internSchema = new mongoose.Schema({
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

    phoneNumber: {
        type: String,
        required: true
    },

    mentor: {
        type: String,
        required: true
    },
});

const intern = mongoose.model("intern", internSchema);
export default intern;