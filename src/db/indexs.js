//using Db folder for importing database

import mongoose from "mongoose";
// MONGODB_URL=mongodb+srv://CodeGodPratyush:Pratyush@cluster0.sdsubyv.mongodb.net
// import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://CodeGodPratyush:Pratyush@cluster0.sdsubyv.mongodb.net")
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB