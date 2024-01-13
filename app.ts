import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { connect } from "./Databas/connectDb";

const imagepath = path.join(__dirname, "public/images");

dotenv.config({
  path: "./.env",
});
const port: number = Number(process.env.PORT);
const app = express();

import user from "./routes/user/index.routes";
import admin from "./routes/admin/index.routes";
app.use(express.json());

app.use("/public/images", express.static(imagepath));
app.use("/user", user);
app.use('/admin',admin);


app.listen(port, () => {
  console.log(`Server is connect at http://localhost:${port}`);
  connect();
});

/**
 * import {Request, Reponse} from 'express'
 * (req : Request, res: Response) =>{
 * }
 */
