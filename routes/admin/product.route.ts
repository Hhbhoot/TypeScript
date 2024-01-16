import express from "express";
import { verifyToken } from "../../Helpers/verifytoken";
import { verifyAdmin } from "../../Helpers/verifyAdmin";
import { addProduct, removeProduct, updateProduct } from "../../controller/admin/product.controller";
const productRoutes= express.Router();
import { upload } from "../../Helpers/imageupload";

productRoutes.post('/addproduct',verifyToken,verifyAdmin,upload.single('image'),addProduct);
productRoutes.put('/updateproduct',verifyToken,verifyAdmin,updateProduct);
productRoutes.put('/removeproduct',verifyToken,verifyAdmin,removeProduct);

export default productRoutes;
