import User from "../model/user.model";
import { Request, Response, response } from "express";
import Jwt from "jsonwebtoken";
import bcryptjs, { genSalt } from "bcrypt";
import { ThrowError } from "../Helpers/errorHandler";
import { userService } from "../service/user.service";
import { IUser } from "../interfaces/IUser.interface";
 const UserService = new userService();

 export const register = async (req: Request, res: Response) => {
  try {
    let user = await UserService.findUser({ email: req.body.email });

    if (user) {
      return res.json({ message: "User already registered.." });
    }
    if (req.body.password === req.body.confirmPassword) {
      let salt = await bcryptjs.genSalt(10);
      let hashPassword = await bcryptjs.hash(req.body.password, salt);

      let newUser : IUser = await UserService.createUser({
        ...req.body,
        password: hashPassword,
      });

      // let payload = {
      //   userId: newUser._id,
      // };
      // let secretKey: any = process.env.JWT_SECRET_KEY;
      // let token = Jwt.sign(payload, secretKey);

      // newUser.token = token;
    
      return res.json({message : "Register Successful..", Data : newUser});
    } else {
      return res
        .status(401)
        .json({ message: "Entered passwords are not matching.." });
    }
  } catch (error) {
  
    return ThrowError(response);
  }
};

export const login = async(req : Request , res : Response)=>{
  try {
      let user : any = await UserService.findUser({email : req.body.email, isDelete : false});
      // console.log(user)

      if(!user){
         return res.status(404).json({ message : "User not Found..pls Register.."});
      };
      let checkPassword : boolean = await bcryptjs.compare(req.body.password,user.password);
      if(checkPassword){

        let payload = {
          userId: user._id,
        };
        let secretKey: any = process.env.JWT_SECRET_KEY;
        let token = Jwt.sign(payload, secretKey);
        
        let Token = await User.updateOne({email : req.body.email}, { $set : { token : token}})         
      return res.status(200).json({
          message : "Login Successfull..",
          token : token
      })
    }else{
      return res.status(400).json({ message : "Pls Enter Coorect Password.."});
    }
  } catch (err) {
   return ThrowError(response)
}
}

export const updateProfile = async(req : Request , res : Response)=>{
  try {
            

  } catch (error) {
    
  }
}