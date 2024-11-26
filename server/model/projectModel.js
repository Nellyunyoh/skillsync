import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    id
        : {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    assignedTo: {
        type: String,
        required: true
    },
});

const project = mongoose.model("project", projectSchema);

export default project;