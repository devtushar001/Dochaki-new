import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cloudinarySetup from './Config/cloudinarySetup.js';
import connectDB from './Config/connectDb.js';
import imageRouter from './Routes/imageRoutes.js';

dotenv.config(); // Load environment variables

const port = process.env.PORT || 5000;
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const cloudKeyId = process.env.CLOUDINARY_API_KEY;
const cloudSecretId = process.env.CLOUDINARY_API_SECRET;
const mongo_url = process.env.MONGODB_URL;

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Add this to handle JSON requests

// Cloudinary & Database Setup
cloudinarySetup(cloudName, cloudKeyId, cloudSecretId);
connectDB(mongo_url);

// Routes
app.use('/api/v1/images', imageRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
