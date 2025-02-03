import mongoose, { Schema } from 'mongoose';

const projectSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    images: [
        {
            type: String, // Storing image URLs as strings
            required: true
        }
    ]
}, { timestamps: true }); // Adds createdAt & updatedAt fields

const projectModel = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default projectModel;
