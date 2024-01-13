import Product from "../../model/product.model";
import { IProduct } from "../../interfaces/IProduct.interface";
import { Request, Response, json, response } from "express";
import { productService } from "../../service/product.service";
import { ThrowError } from "../../Helpers/errorHandler";
import { name } from "ejs";
const ProductService = new productService();

export const addProduct = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    if (req.file) {
      req.body.profileimage = `${req.file.path.replace(/\\/g, "/")}`;
    }
    // const product = await Product.create({
    //     brand : req.body.brand ,
    //     model : req.body.model,
    //     year : req.body.model,
    //     price : req.body.model,
    //     profileimage : req.body.profileimage,
    //     // owner: {
    //     //   name: owner.name,
    //     //   contact: owner.contact,
    //     //   location: owner.location
    //     // }
    //   });

    // await product.save();

    // if (product) {
    //   return res
    //     .status(201)
    //     .json({ message: "Product added successfully..", product });
    // } else {
    //   return res.json({ message: "Somethong went wrong.." });
    // }
  } catch (error) {
    console.log(error);
    return ThrowError(response);
  }
};
