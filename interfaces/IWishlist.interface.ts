import { Schema } from "mongoose";

interface cartitem{
     cartitem : Schema.Types.ObjectId,
}

export interface IWishlist {
 
     _id? : string, 
     user : Schema.Types.ObjectId,
     item: cartitem[],
     added_At : Date


}