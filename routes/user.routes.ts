import express from "express";
import register from "../controller/user.controller";
const userRoutes = express.Router();

userRoutes.post('/register',register);

export default userRoutes ;
