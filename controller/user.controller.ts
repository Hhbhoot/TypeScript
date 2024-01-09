import User from '../model/user.model';
import { Request,Response } from 'express';

const register = async(req : Request, res: Response)=>{
    try {
       let user = await User.findOne({email : req.body.email});
       console.log(user)
       if(user){
         return res.json({message : "User already registered.."})
       } 
       let newUser =await User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        profileimage : req.body.profileimage,
        number : req.body.number

       }) ;
       return res.json(newUser);    
  

    } catch (error) {
        console.log(error);
        return res.json({message : "Internal server Error.."})
        
    }
 


}
export default register ;