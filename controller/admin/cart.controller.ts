import Cart from '../../model/cart.model';
import { Request ,Response } from 'express';
import { cartService } from '../../service/cart.service';
const CartService = new cartService();

export const getAllCarts = async(req : Request , res : Response)=>{
    try {
          let carts : object[] = await CartService.findAllCart();
          if(carts){
             return res.status(200).json(carts)
          }
          else { 
             return res.status(400).json({ message : "cart not found..."})
          }
         
    } catch (error) {
        console.log(error)
        return res.status(500).json({message :"internal server error.."})
    }
};

export const getSpecificUserCart= async(req : Request , res : Response)=>{
     try {
            
           let cart = await CartService.findCartByUserId(req.body);
           if(cart){
             return res.status(200).json(cart)
           }
           else{
            return res.status(400).json({message : "Cart not found.."})
           }

     } catch (error) {
        console.log(error);
        return res.status(500).json({ message :"Internal server error.."})
     }
}