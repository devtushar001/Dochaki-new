import mongoose from "mongoose";

const connectDB = async (mongo_url) => {
     try {
      await mongoose.connect(mongo_url);
      console.log(`Mongoose connected : ${mongoose.connection.host}`)
     } catch (error) {
      
     }
}

export default connectDB;