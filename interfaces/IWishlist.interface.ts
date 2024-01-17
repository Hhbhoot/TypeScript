import { Schema } from "mongoose";



export interface IWishlist {
 
     _id? : string, 
     user : Schema.Types.ObjectId,
     cartitem : Schema.Types.ObjectId,
     added_At : Date


}