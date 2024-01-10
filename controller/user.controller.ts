import User from "../model/user.model";
import { Request, Response } from "express";
import Jwt from "jsonwebtoken";
import bcryptjs, { genSalt } from "bcrypt";
import dotenv from "dotenv";
dotenv.config({
  path: "../.env",
});

const register = async (req: Request, res: Response) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.json({ message: "User already registered.." });
    }
    let salt = await bcryptjs.genSalt(10);
    let hashPassword = await bcryptjs.hash(req.body.password, salt);

    let newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      profileimage: req.body.profileimage,
      number: req.body.number,
    });
    await newUser.save();

    let payload = {
      userId: newUser._id,
    };
    let secretKey: any = process.env.JWT_SECRET_KEY;
    let token = Jwt.sign(payload, secretKey);

    newUser.token = token;

    return res.json(newUser);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server Error.." });
  }
};
export default register;
