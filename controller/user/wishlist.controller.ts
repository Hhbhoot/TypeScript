import wishlistCollection from "../../model/wishlist.model";
import productCollection from "../../model/product.model";

import { Request ,Response } from "express";
import { wishlistService } from "../../service/wishlist.service";
import { IWishlist } from "../../interfaces/IWishlist.interface";
const WishlistService = new wishlistService();

export const addToWishlist = async(req : Request , res : Response)=>{
    try {
        const { productId} = req.body ;

        let wishlist = await WishlistService.findUserWishlist(req.user._id,productId);
        if(wishlist){
             return res.status(200).json({ message : "Item already exist in wishlist"})
        }

         let cartitem = await productCollection.findById(productId);
         console.log(cartitem)

        
        let newWishlist : IWishlist = await wishlistCollection.create({
              user : req.user._id,
              'item.cartitem' : cartitem,
              added_At : Date.now()
        })

         if(newWishlist){
             return res.status(201).json({ message : "Item added into wishlist successfully.."})
         }
         else{
             return res.status(400).json({ message : "Something went wrong.."})
         }
 
        
    } catch (error) {
         console.log(error)
         return res.status(500).json({ message : "Internal server error.."})
     }
}

export const removeFromWishlist = async(req : Request , res: Response)=>{
     try {
           const { productId } = req.body ;
         
           let wishlist = await WishlistService.updateWishlist(req.user._id,productId,{isDelete : true});
           if(wishlist){
             return res.status(200).json({ message :"Item removed from wishlist successfully.."})
           }
           else{
             return res.status(400).json({ message : "something went wrong.."})
           }

     } catch (error) {
        console.log(error);
        return res.status(500).json({ mesage : "Internal server error..."})
     }
}