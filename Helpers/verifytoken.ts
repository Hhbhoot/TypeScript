import { Request,Response,NextFunction, response } from "express";
import jwt  from "jsonwebtoken";
import User from '../model/user.model';
import { ThrowError } from "./errorHandler";

declare global {
  namespace Express {
    interface Request {
      user?: any; // Add this line to extend the Request interface
    }
  }
}
export const verifyToken = async(req : Request , res : Response , next : NextFunction)=>{
    try{
      let token : any= req.headers['authorization']?.split(" ")[1];
      // console.log(token)
      if(!token){
        return res.json({ message : "token not found"})
      }
      // console.log(token)
      let secretKey = process.env.JWT_SECRET_KEY as string
     
      let {userId} : any = jwt.verify(token,secretKey)
      let user = await  User.findById(userId)
  
      if(user){
         req.user = user ;
         next();
      }
      else{
        return res.json({message : "User Not Found.."})
      }
    }
      catch(error){
        return res.json(error)
      }
}