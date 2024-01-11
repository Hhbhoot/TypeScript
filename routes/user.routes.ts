import express from "express";
import register, { login } from "../controller/user.controller";
import passport from "passport";

const userRoutes = express.Router();

userRoutes.post('/register',register);
userRoutes.post('/login',passport.authenticate('local') ,login)


export default userRoutes ;
