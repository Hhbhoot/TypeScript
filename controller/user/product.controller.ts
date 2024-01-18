import Product from "../../model/product.model";
import { Request, Response } from "express";
import { productService } from "../../service/product.service";
const ProductService = new productService();

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    let product = await ProductService.getAllProducts();
    if (product) {
      return res.status(200).json(product);
    } else {
      return res.json({ message: "something went wrong.." });
    }
  } catch (error) {
    console.warn(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};

export const getSpecificProduct = async(req :Request , res: Response)=>{
    try {
        const { productId} = req.body ;
        // console.log(productId)

        let product = await ProductService.getProductDetails(productId);
        if(product){
            return res.status(200).json(product);
        }
        else{
            return res.json({ message : "Something Went Wrong.."})
        }

    } catch (error) {
         console.log(error);
         return res.status(500).json({ message : "Internal server Error.."})
    }
}

export const getProductByCategory = async(req : Request , res : Response)=>{
   try {
        let{ category} = req.query;
        let product = await ProductService.findByCategory(category);
        if(product){
          return res.status(200).json(product);
        }
        else{
          return res.json({ message : "Product not found..something went wrong."})
        }
   } catch (error) {
    console.log(error);
    return res.status(500).json({message : "Internal server error.."})
   }
}