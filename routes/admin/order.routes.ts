import express from "express";
import { verifyToken } from "../../Helpers/verifytoken"
import { verifyAdmin } from "../../Helpers/verifyAdmin";
import { getAllOrder, getSpecificUserOrder } from "../../controller/admin/order.controller";

const orderRoutes = express.Router();

orderRoutes.get('/getallorders',verifyToken,verifyAdmin,getAllOrder);
orderRoutes.get('/getspecificuserorder',verifyToken,verifyAdmin,getSpecificUserOrder);

export default orderRoutes ;