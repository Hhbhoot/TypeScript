import dotenv from "dotenv"
dotenv.config();
import express from "express";
import path from "path";
import { connect } from "./Databas/connectDb";

const imagepath = path.join(__dirname, "public/images");

const port: number = Number(process.env.PORT);
const app = express();

import user from "./routes/user/index.routes";
import admin from "./routes/admin/index.routes";
import morgan from "morgan";
app.use(express.json());
app.use(express.urlencoded({ extended : false}))
app.use(morgan('dev'));

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
