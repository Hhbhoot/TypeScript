import { Schema } from "mongoose";

interface cartitem{
     cartitem : Schema.Types.ObjectId,
}

export interface IWishlist {
 
     user : Schema.Types.ObjectId,
     item: cartitem[],
     added_At : Date


}