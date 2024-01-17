import mongoose, { Schema, mongo } from "mongoose";
import { IWishlist } from "../interfaces/IWishlist.interface";

const wishlistSchema = new Schema({

    user : {
         type : mongoose.Schema.Types.ObjectId,
         ref : "user"
    },
    
    cartitem : [{
             type : mongoose.Schema.Types.ObjectId,
             ref : "product"
         
    }],
    added_At : {
        type : Date,
        default : Date.now()
    },
    isDelete : {
        type : Boolean,
        default: false

    }
},
{ timestamps : true});

const wishlistCollection = mongoose.model<IWishlist>('wishlist',wishlistSchema);

export default wishlistCollection ;