import mongoose, { Schema, mongo } from "mongoose";
import { IWishlist } from "../interfaces/IWishlist.interface";

const wishlistSchema = new Schema({

    user : {
         type : mongoose.Schema.Types.ObjectId,
         ref : "user"
    },
    item : [{
         cartitem : {
             type : mongoose.Schema.Types.ObjectId,
             ref : "product"
         }
    }],
    added_At : {
        type : Date,
        default : Date.now()
    }
},
{ timestamps : true});

const wishlishCollection = mongoose.model<IWishlist>('wishlist',wishlistSchema);

export default wishlishCollection ;