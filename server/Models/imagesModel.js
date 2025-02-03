import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  imageId: { type: String, required: true },
});

const imageModel = mongoose.models.Image || mongoose.model("Image", ImageSchema);
export default imageModel;