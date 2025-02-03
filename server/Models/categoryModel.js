import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true // Prevent duplicate categories
    },
    img: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (v) {
                return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/.test(v);
            },
            message: props => `${props.value} is not a valid image URL!`
        }
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const categoryModel = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default categoryModel;
