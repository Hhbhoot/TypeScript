import Cart from "../model/cart.model";
import mongoose from "mongoose";

export class cartService{
  
    findAllCart = async()=>{
         return await Cart.find()
    }; 
    
    findCart = async(id : string , productId : string)=>{
        return await Cart.findOne({user : id ,cartitem : productId , isDelete : false})
    }
      
    findCartAndUpdate = async(id : string , productId : string ,body :any)=>{
        return await Cart.findOneAndUpdate({user : id , cartitem : productId , isDelete : false},{ $set : body})
    }
    findCartByUserId= async(id : string)=>{
         return await Cart.findOne({user : new mongoose.Types.ObjectId(id)});
    } 
}