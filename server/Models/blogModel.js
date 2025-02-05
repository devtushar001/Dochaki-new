import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    gallery: {
        type: [String],
        default: []
    }
});

const blogModel = mongoose.models.Blogs || mongoose.model('Blogs', blogSchema);

export default blogModel;
