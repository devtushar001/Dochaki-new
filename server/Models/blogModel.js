import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    gallery: {
        type: [String],
        default: []
    },
    searchkey: {
        type: [String],
        default: []
    }
});

const blogModel = mongoose.models.Blogs || mongoose.model('Blogs', blogSchema);

export default blogModel;
