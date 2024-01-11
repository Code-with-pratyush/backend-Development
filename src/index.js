import connectDB from "./db/db.js";


connectDB();














// // connecting through mongoDB via 
// // connecting through server


// import mongoose from "mongoose";
// import express from "express";

// const app = express();
// const PORT = 8000;

// ;(async()=>{
//   try {
//     await mongoose.connect("mongodb+srv://CodeGodPratyush:Pratyush@cluster0.sdsubyv.mongodb.net/Palki");
//     app.on("error" ,()=>{
//       console.log("error: ",error);
//       throw error;
//     });

//     app.listen(PORT,()=>{
//       console.log(`App Listening on PORT ${PORT}`);
//     })
//   } catch (error) {
//     console.log("ERR: ",error);
//     throw error;
//   }
// })();