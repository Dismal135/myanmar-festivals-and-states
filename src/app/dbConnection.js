import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const myMongoose = async () => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
      console.log(error)
      throw new Error("database connection fail")
    }
  }
};

export default myMongoose;
