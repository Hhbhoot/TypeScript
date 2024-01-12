import User from "../model/user.model";

export class userService  {

     createUser = async( body : any) =>{
         return await User.create(body)
     };

     findUser = async(body : any)=>{
        return await User.findOne(body)
     };

     

     }


