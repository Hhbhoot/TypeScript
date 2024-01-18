import express from "express";
import { verifyToken } from "../../Helpers/verifytoken";
import { getAllProducts, getProductByCategory, getSpecificProduct } from "../../controller/user/product.controller";
const productRoutes = express.Router();

productRoutes.get('/getallproducts',verifyToken,getAllProducts);
productRoutes.get('/getspecificproduct',verifyToken,getSpecificProduct);
productRoutes.get('/getproductbtcategory',verifyToken,getProductByCategory)

export default productRoutes ;