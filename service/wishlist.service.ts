import mongoose from "mongoose";
import wishlistCollection from "../model/wishlist.model";

export class wishlistService{

    addToWishlist = async(body : object)=>{
        return await wishlistCollection.create(body)
    }
      
     findUserWishlist = async(id:string , productId : string)=>{
        return await wishlistCollection.findOne({ user : id , cartitem : productId})
     }

    updateWishlist = async(id : string,productId : string ,body : any) =>{
         return await wishlistCollection.findOneAndUpdate({user : id, cartitem :productId ,  isDelete : false} , {$set : body},{ new :true})
    }   

}