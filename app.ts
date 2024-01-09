import express from "express";
import mongoose from "mongoose";
const port: number = 7070;
const app = express();

import userRoutes from "./routes/user.routes";

app.use(express.json());

async function connect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/typescript");
}
let connectDB =connect()
  .then(() => {
    console.log("mongodb Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

  app.use('/',userRoutes);

app.listen(port, () => {
  console.log(`Server is connect at http://localhost:${port}`)
  connectDB;
});

/**
 * import {Request, Reponse} from 'express'
 * (req : Request, res: Response) =>{
 * }
 */
