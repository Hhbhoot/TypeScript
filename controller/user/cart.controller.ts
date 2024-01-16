import Cart from "../../model/cart.model";
import Product from "../../model/product.model";
import { Request, Response, response } from "express";
import { cartService } from "../../service/cart.service";
const CartService = new cartService();
import { productService } from "../../service/product.service";
import { ICart } from "../../interfaces/ICart.interface";
const ProductService = new productService();

declare global {
  namespace Express {
    interface Request {
      user?: any; // Add this line to extend the Request interface
    }
  }
}

export const addToCart = async (req: Request, res: Response) => {
  try {
    const { productId, rentalTimeInMonth } = req.body;
    const userObj = req.user;

    let cart = await CartService.findCart(userObj._id, productId);
    if (cart) {
      return res.status(200).json({ message: "Item already exists in cart" });
    }

    let isProduct: any = await ProductService.getProductDetails(productId);
    if (!isProduct) {
      return res.json({ message: "Product not found.." });
    }
    // console.log(isProduct[0]._id)

    let newCart: ICart = await Cart.create({
      user: req.user._id,
      cartitem: isProduct[0]._id,
      rentPerMonth: isProduct[0].price,
      rentalTimeInMonth: rentalTimeInMonth,
      image: isProduct[0].image,
    });

    if (newCart) {
      return res.status(201).json(newCart);
    } else {
      return res.status(400).json({ message: "Something went wrong.." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};

export const updateCart = async (req: Request, res: Response) => {
  try {
    let userObj = req.user;
    const { productId, rentalTimeInMonth } = req.body;
    let cart = await CartService.findCartAndUpdate(userObj._id, productId, {
      rentalTimeInMonth: rentalTimeInMonth,
    });

    if (cart) {
      return res.status(200).json({ message: "Cart Updated successfully.." });
    } else {
      return res.status(400).json({ message: "Cart not found.." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};

export const removeFromCart = async(req :Request , res : Response)=>{
  try {
     const { productId} = req.body ;
     let userObj = req.user;
     let cart = await CartService.findCartAndUpdate(req.user._id,productId,{ isDelete : true});
     if(cart){
       return res.status(200).json({ message : "Item removed from cart successfully..."})
     }
     else{
      return res.status(400).json({message : "cart not found.."})
     }
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message : "Internal Server error.."})
  }
}
