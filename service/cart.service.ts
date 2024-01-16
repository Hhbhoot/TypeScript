import Cart from "../model/cart.model";
import mongoose from "mongoose";

export class cartService{

    createCart = async(body : any)=>{
        return await Cart.create(body);
         
    }

    findCart = async(id : string , productId : string)=>{
        return await Cart.findOne({user : id ,cartitem : productId })
    }
      
    findCartAndUpdate = async(id : string , productId : string,body :any)=>{
        return await Cart.findOneAndUpdate({user : id , cartitem : productId},{ $set : body})
    }
}