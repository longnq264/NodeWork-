import mongoose from "mongoose";    
import express from "express";
import cors from "cors"
const app = express();

//midlewares
app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/admin")
.then(() => {
    console.log("connected");
})

export const viteNodeApp = app;