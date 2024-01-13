import User from "../model/user.model";

export class userService  {

     createUser = async( body : any) =>{
         return await User.create(body)
     };

     findUser = async(body : any)=>{
        return await User.findOne(body)
     };

     findUserById = async(body : any)=>{
         return await User.findById(body)
     }

     findByUserIdAndUpdate =async(id : any, body : any)=>{
        return await User.findByIdAndUpdate(id ,{ $set :  body } , {new : true})
     }

   //   findUserByIdAndDelete = async(id : any )=>{
   //      return await User.findOneAndUpdate(id,{ $set : { isDelete : true}})
   //   }
     
     }


