import User from "../model/user.model";
import bcryptjs, { genSalt } from "bcrypt";
import { Strategy as LocalStrategy } from "passport-local";

export const initializePassport = (passport : any)=>{
passport.use(
  new LocalStrategy(async (username: string, password : any, done) => {

    //  console.log(username,password)
    const user = await User.findOne({ username });
  
  
    if (!user) return done(null, false);

     password = await bcryptjs.compare(password , user.password);
     
     if(password == false)
     return done(null, false , {message : 'Password Wrong'});
    return done(null, user);
  })
);

 passport.serializeUser((user : any, done : any)=>{
   if(user){
    return done(null , user.id)
   }
   else{
    return done(null ,false);
   }
})

passport.deserializeUser(async(id : any , done : any)=>{

     let user = await User.findById(id ,(err : any,user : any)=>{
          if(err){
            return done(null ,false)
          }
          else{
            console.log(user)
            return done(null, user)
          }
     })
}   )
}


