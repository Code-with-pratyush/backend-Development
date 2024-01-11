import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app= express();

app.use(cors());

//When req is coming in json
app.use(express.json({limit:"16kb"}));

//when req is in form of url
app.use(express.urlencoded({extended:true,limit:"16kb"}));

//when we want to store file/folder
app.use(express.static("public"));

//when we want to store cookies
app.use(express.cookieParser());

export {app} 