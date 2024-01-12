import { Request,Response,NextFunction, response } from "express";
import jwt  from "jsonwebtoken";
import User from '../model/user.model';
import { ThrowError } from "./errorHandler";

export const verifyToken = async(req : Request , res : Response , next : NextFunction)=>{
    try{
      let token : any= req.headers['x-auth-token'];
      if(!token){
        return res.json({ message : "token not found"})
      }
      // console.log(token)
      let secretKey : any= process.env.JWT_SECRET_KEY 
     
      let {userId} : any = jwt.verify(token,secretKey)
      // console.log(userId)
      req.headers['user'] = userId;
  next();
    }
      catch(error){
        return ThrowError(response)
      }
}