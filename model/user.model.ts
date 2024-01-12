import mongoose, { Schema, InferSchemaType } from "mongoose";
import { IUser } from "../interfaces/IUser.interface";

const userschema = new Schema({
  name: { type: String, required: true  },
  email: { type: String, required: true , unique : true},
  password: { type: String , required : true},
  profileimage : {type : String },
  number : { type : Number},
  token : { type : String , default : null},
  isDelete : { type : String , default : false}
},
{
  timestamps : true
});

 const UserCollection = mongoose.model<IUser>('user',userschema)

 export default UserCollection ;
