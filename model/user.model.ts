import mongoose, { Schema, InferSchemaType } from "mongoose";
import { IUser } from "../interfaces/IUser.interface";

const userschema = new Schema({
  firstname : {type : String , required : true},
  middlename : {type : String , required : true},
  lastname : {type : String , required : true},
  username: { type: String, required: true , unique : true },
  email: { type: String, required: true , unique : true},
  password: { type: String , required : true},
  profileimage : {type : String },
  number : { type : Number},
  DOB : {type : Date},
  gender : { type : String , enum :['male','female']},
  token : { type : String , default : null},
  isDelete : { type : String , default : false}
},
{
  timestamps : true
});

 const UserCollection = mongoose.model<IUser>('user',userschema)

 export default UserCollection ;
