import connectDB from "./db/db.js";

//is a async method and retuurns a promise
connectDB()
.then(()=>{
  app.listen(8000,()=>{
    console.log(`Server Listening on port 8000`)
  })
})
.catch((error)=>{
  console.log("MongoDB connection failed",error);
  throw error;
});













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