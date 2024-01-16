import express from "express";
import { verifyToken } from "../../Helpers/verifytoken";
import { verifyAdmin } from "../../Helpers/verifyAdmin";
import { getAllCarts, getSpecificUserCart } from "../../controller/admin/cart.controller";
const cartRoutes = express.Router();

cartRoutes.get('/getallcarts',verifyToken,verifyAdmin,getAllCarts);
cartRoutes.get('/getspecificusercart',verifyToken,verifyAdmin,getSpecificUserCart)

export default cartRoutes ;