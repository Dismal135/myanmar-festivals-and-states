import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const myMongoose = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw new Error("Failed to connect to MongoDB");
    }
  }
};

export default myMongoose;
