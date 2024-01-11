import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import session from "express-session";

dotenv.config({
  path : './.env'
})
const port: number = Number(process.env.PORT);
const app  = express();

import userRoutes from "./routes/user.routes";
import { initializePassport } from "./Helpers/passport";
import passport from "passport";

app.use(express.json());
app.use(session({
    secret : 'Hitesh123@',
    resave : false,
    saveUninitialized : true,
    cookie : { secure :false}
}))

app.use(passport.initialize());


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
  initializePassport(passport) ;

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
