import { Schema } from "mongoose";

export interface IReview{
     _id? : string ,
    user : Schema.Types.ObjectId,
    cartitem : Schema.Types.ObjectId,
     model? : string,
     rating? : number | any,
     comment? : string,
     avg_Rating : number,
     isDelete ?: boolean 
}