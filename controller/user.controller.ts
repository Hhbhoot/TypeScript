import User from "../model/user.model";
import { Request, Response, response } from "express";
import Jwt from "jsonwebtoken";
import bcryptjs, { genSalt } from "bcrypt";
import { ThrowError } from "../Helpers/errorHandler";
import { userService } from "../service/user.service";
import { IUser } from "../interfaces/IUser.interface";
const UserService = new userService();

declare global {
  namespace Express {
    interface Request {
      user?: any; // Add this line to extend the Request interface
    }
  }
}

export const register = async (req: Request, res: Response) => {
  try {
    let user = await UserService.findUser({ email: req.body.email , isDelete : false});

    if (user) {
      return res.json({ message: "User already registered.." });
    }
    if (req.body.password === req.body.confirmPassword) {
      let salt = await bcryptjs.genSalt(10);
      let hashPassword : string | undefined = await bcryptjs.hash(req.body.password, salt);

       let filepath : any ;
      if(req.file){
       filepath = `${req.file.path.replace(/\\/g,'/')}`
      }

      let newUser: IUser = await UserService.createUser({
        ...req.body,
        password: hashPassword,
        profileimage : filepath
      });

      return res.json({ message: "Register Successful..", Data: newUser });
    } else {
      return res
        .status(401)
        .json({ message: "Entered passwords are not matching.." });
    }
  } catch (error) {
    return ThrowError(response);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    let user: any = await UserService.findUser({
      email: req.body.email,
      isDelete: false,
    });
    // console.log(user)

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not Found..pls Register.." });
    }
    let checkPassword: boolean = await bcryptjs.compare(
      req.body.password,
      user.password
    );
    if (checkPassword) {
      let payload = {
        userId: user._id,
      };
      let secretKey = process.env.JWT_SECRET_KEY;
      let token = Jwt.sign(payload, secretKey as string);

      let Token = await User.updateOne(
        { email: req.body.email },
        { $set: { token: token } }
      );
      return res.status(200).json({
        message: "Login Successfull..",
        token: token,
      });
    } else {
      return res.status(400).json({ message: "Pls Enter Coorect Password.." });
    }
  } catch (err) {
    return ThrowError(response);
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  try {
    if (req.user) {
      return res.status(200).json(req.user);
    }
  } catch (error) {
    return ThrowError(response);
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    let userObj: any = req.user;
    let user = await UserService.findByUserIdAndUpdate(userObj._id, {
      ...req.body,
    });
    if (user) {
      return res
        .status(201)
        .json({ message: "Profile updated successfully..", Data: user });
    } else {
      return res.json({ message: "User not Found.." });
    }
  } catch (error) {
    return ThrowError(response);
  }
};

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    let userObj: any = req.user;
    let user = await UserService.findByUserIdAndUpdate(userObj._id,{ isDelete : true});
    if (user) {
      return res.json({ message: "Profile Deleted Successfully" });
    } else {
      return res.json({ message: "Something went wrong.." });
    }
  } catch (error) {
    return ThrowError(response);
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    let userObj: any = req.user;
    let checkPassword = await bcryptjs.compare(
      req.body.password,
      userObj.password
    );

    if (!checkPassword) {
      return res
        .status(200)
        .json({ message: "Pls Enter Correct Current Password" });
    } else {
      if (
        req.body.newPassword === req.body.confirmNewPassword &&
        req.body.newPassword !== userObj.password
      ) {
        let salt = await bcryptjs.genSalt(10);
        let hashPassword: string = await bcryptjs.hash(
          req.body.newPassword,
          salt
        );
        let password: string = hashPassword;

        let updatePassword = await UserService.findByUserIdAndUpdate(
          userObj._id,
          { password }
        );

        if (updatePassword) {
          return res
            .status(200)
            .json({
              message: "Password changed successfully...",
              updatePassword,
            });
        } else {
          return res.json({ messsage: "Something went wrong.." });
        }
      } else {
        if (req.body.newPassword !== req.body.confirmNewPassword) {
          return res.json({
            message: "Newpassword and confirm new password are not matching..",
          });
        } else {
          return res
            .status(200)
            .json({ message: "New Password and old password can not be same" });
        }
      }
    }
  } catch (error) {
    return ThrowError(response);
  }
};

export const logout = async(req : Request , res :Response)=>{
  try {
              
         let userObj= req.user ;
         console.log(userObj);
         let removeToken = await UserService.findByUserIdAndUpdate(userObj._id,{ token : null});
         if(removeToken){
            return res.status(200).json({Message :"Logout Successfully.."})
         }
         else{
          return res.status(200).json({ message : "Something Went wrong... "})
         }

  } catch (error) {
    console.log(error)
    return ThrowError(response);
  }
}
