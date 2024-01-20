import Product from "../../model/product.model";
import { IProduct } from "../../interfaces/IProduct.interface";
import { Request, Response, json, response } from "express";
import { productService } from "../../service/product.service";
import { name } from "ejs";
const ProductService = new productService();

export const addProduct = async (req: Request, res: Response) => {
  try {
    let image: string[] = [];
    if (req.file) {
      image[0] = `${req.file.path.replace(/\\/g, "/")}`;
    }
    let product = await ProductService.addProduct(req.body);
    let updateProduct = await ProductService.updateById(product._id, {
      image: image[0],
    });
    if (product && updateProduct) {
      return res.status(201).json({ message: "Product added successfully.." });
    } else {
      return res.json({ message: "Somethong went wrong.." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error)

  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId , price} = req.body;

    let product = await ProductService.updateById(productId, { price: price });
    if (product) {
      return res
        .status(200)
        .json({ message: "Product Updated successfully..." });
    } else {
      return res.json({ message: "Something went wrong.." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const removeProduct = async (req: Request, res: Response) => {
  try {
    const productId  = req.body;
    let product = await ProductService.updateById(productId, {
      isDelete: true,
    });
    if (product) {
      return res
        .status(200)
        .json({ message: "Product remove4d successfully.." });
    } else {
      return res.status(404).json({ message: "Someething Went wrong.." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};
