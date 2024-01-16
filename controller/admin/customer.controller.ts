import User from "../../model/user.model";
import { Request, Response } from "express";
import { userService } from "../../service/user.service";
const UserService = new userService();

export const getAllUser = async (req: Request, res: Response) => {
  try {
    let users: object[] = await UserService.findAllUser();
    if (users) {
      return res.status(200).json(users);
    } else {
      return res.status(200).json({ message: "Users not found.." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error.." });
  }
};

export const getSpecificUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    let user: object | any = await UserService.findUserById(id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.json({ message: "User not found.." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};
