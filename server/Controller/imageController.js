import imageModel from "../Models/imagesModel.js";

import { v2 as cloudinary } from "cloudinary";

export const uploadImageController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Convert buffer to Base64 for Cloudinary upload
    const base64Image = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(base64Image, {
      folder: "mern-uploads",
    });

    const savedImage = await imageModel.create({
      imageUrl: result.secure_url,
      imageId: result.public_id
    });

    res.status(200).json({ message: "Image uploaded successfully!", savedImage });

  } catch (error) {
    res.status(500).json({ message: "Image upload failed", error });
  }
};


export const getImageController = async (req, res) => {
  try {
    // Fetch all images from MongoDB
    const images = await imageModel.find().select("imageUrl publicId");  // Only return imageUrl and publicId

    // If no images found, return a message
    if (!images.length) {
      return res.status(404).json({ message: "No images found" });
    }


    // Send images with status code 200
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteImageController = async (req, res) => {
  try {
    const { id } = req.body;
    const image = await imageModel.findById(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    await cloudinary.uploader.destroy(image.imageId); // FIXED: use imageId instead of publicId

    await imageModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Image deletion failed", details: error.message });
  }
};