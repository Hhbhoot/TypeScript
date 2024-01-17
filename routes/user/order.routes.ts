import express from "express";
import { verifyToken } from "../../Helpers/verifytoken";
import { addToOrder, cancelOrder } from "../../controller/user/order.controoler";

const orderRoutes = express.Router();

orderRoutes.post('/addtoorder',verifyToken,addToOrder);
orderRoutes.put('/cancelorder',verifyToken,cancelOrder);

export default orderRoutes ;