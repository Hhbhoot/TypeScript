import express from "express";
import { verifyToken } from "../../Helpers/verifytoken";
import { verifyAdmin } from "../../Helpers/verifyAdmin";
import { addProduct } from "../../controller/admin/product.controller";
const productRoutes= express.Router();
import { upload } from "../../Helpers/imageupload";
productRoutes.post('/addproduct',verifyToken,upload.single('profileimage'),addProduct);

export default productRoutes;
