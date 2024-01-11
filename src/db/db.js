//make a function and export it to index.js
import mongoose from "mongoose";

const connectDB = async()=>{
  try {
    const connectionInstance = await mongoose.connect("mongodb+srv://CodeGodPratyush:Pratyush@cluster0.sdsubyv.mongodb.net/Palki");
    console.log(`MongoDB connected !! ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection Error",error);
    process.exit(1);
  }
}

export default connectDB;