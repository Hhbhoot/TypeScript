import express from "express";
import {login, register,getUserProfile, updateProfile, deleteProfile } from '../controller/user.controller'
import { verifyToken } from "../Helpers/verifytoken";
const userRoutes = express.Router();

userRoutes.post('/register',register);
userRoutes.post('/login',login)
userRoutes.get('/profile',verifyToken,getUserProfile);
userRoutes.put('/updateprofile',verifyToken,updateProfile)
userRoutes.put('/deleteprofile',verifyToken,deleteProfile)

export default userRoutes ;
