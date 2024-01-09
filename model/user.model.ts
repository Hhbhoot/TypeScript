import mongoose, { Schema, InferSchemaType } from "mongoose";

const userschema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String , required : true},
  profileimage : {type : String },
  number : { type : Number},
  gender : { type : String , enum :['male','female']},
  isDelete : { type : String , default : false}
},
{
  timestamps : true
});

type user = InferSchemaType<typeof userschema>;

export default mongoose.model("user", userschema);
