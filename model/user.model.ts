import mongoose, { Schema, InferSchemaType } from "mongoose";
import { IUser } from "../interfaces/IUser.interface";

const userschema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
    },
    password: {
      type: String,
      required: true,
    },
    profileimage: {
      type: String,
    },
    number: {
      type: Number,
    },
    token: {
      type: String,
      default: null,
    },
    is_Admin : {
      type : Boolean,   
      default : false
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserCollection = mongoose.model<IUser>("user", userschema);

export default UserCollection;
