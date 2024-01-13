import express from "express";
import {login, register,getUserProfile, updateProfile, deleteProfile, changePassword, logout } from '../../controller/user.controller'
import { verifyToken } from "../../Helpers/verifytoken";
const userRoutes = express.Router();
import { upload } from "../../Helpers/imageupload";

userRoutes.post('/register',upload.single('profileimage'),register);
userRoutes.post('/login',login)
userRoutes.get('/profile',verifyToken,getUserProfile);
userRoutes.put('/updateprofile',verifyToken,updateProfile)
userRoutes.put('/deleteprofile',verifyToken,deleteProfile);
userRoutes.put('/changepassword',verifyToken,changePassword)
userRoutes.put('/logout',verifyToken,logout);

export default userRoutes ;
