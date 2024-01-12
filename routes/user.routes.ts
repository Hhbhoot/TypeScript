import express from "express";
import {login, register, updateProfile} from '../controller/user.controller'
import { verifyToken } from "../Helpers/verifytoken";
const userRoutes = express.Router();

userRoutes.post('/register',register);
userRoutes.post('/login',login)
userRoutes.put('/updateprofile',verifyToken,updateProfile);

export default userRoutes ;
