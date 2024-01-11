import User from "../model/user.model";
import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import bcryptjs, { genSalt } from "bcrypt";
import dotenv from "dotenv";
import userRoutes from "../routes/user.routes";
import passport from "passport";

const register = async (req: Request, res: Response) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.json({ message: "User already registered.." });
    }
     if(req.body.password === req.body.confirmPassword){

    let salt = await bcryptjs.genSalt(10);
    let hashPassword = await bcryptjs.hash(req.body.password, salt);

    let newUser = await User.create({
     ...req.body,
     password : hashPassword
    });
    await newUser.save();

    let payload = {
      userId: newUser._id,
    };
    let secretKey: any = process.env.JWT_SECRET_KEY;
    let token = Jwt.sign(payload, secretKey);

    newUser.token = token;
    newUser.save();
   return res.json(newUser);
  }
  else {
    return res.status(401).json({ message : "Entered passwords are not matching.."})
  }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server Error.." });
  }
};
export default register;

export const login = async function(req : Request, res : Response){

  let user : any= req.user
 console.log(user);
  return res.json({ message : " Login Successfull",
                    token : user.token })
}
       
     
    

    

          

  
    
  


