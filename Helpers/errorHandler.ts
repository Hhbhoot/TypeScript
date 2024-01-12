import { Response, response } from "express";

export const ThrowError =(res : Response , statusCode? : number  , msg?: string)=>{
    return  response.status(statusCode ? statusCode : 500).json({
         msg : msg? msg : "Internal server error"
    })
}