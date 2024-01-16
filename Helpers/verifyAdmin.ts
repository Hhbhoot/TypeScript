import {Request,Response, NextFunction, response } from "express";
import { ThrowError } from "./errorHandler";

export const verifyAdmin = async(req : Request , res: Response , next : NextFunction)=>{
    try {
         if(req.user.is_Admin === true){
            next();
         }else{
             return res.status(401).json({ message : "Unauthorized User.."})
         }       
    } catch (error) {
        return ThrowError(response)        
    }
};