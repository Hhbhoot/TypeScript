import multer, { diskStorage } from "multer";
import { Request } from "express";
const storage = multer.diskStorage({
     destination : (req : Request , file , cb)=>{
          cb(null ,'public/images')
     },
     filename : (req : Request ,file ,cb)=>{
      cb(null,`${Date.now()}_${file.originalname.replace(/\s+/g,'_')}`)
     }
});

export const upload = multer({storage : storage})