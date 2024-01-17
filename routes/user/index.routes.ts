import express from "express";
const user = express.Router();

import userRoutes from "./user.routes";
import productRoutes from "./product.routes";
import cartRoutes from "./cart.routes";
import orderRoutes from "./order.routes";

user.use('/',userRoutes);
user.use('/product',productRoutes);
user.use('/cart',cartRoutes);
user.use('/order',orderRoutes);

export default user ;