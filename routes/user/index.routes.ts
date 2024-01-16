import express from "express";
const user = express.Router();

import userRoutes from "./user.routes";
import productRoutes from "./product.routes";
import cartRoutes from "./cart.routes";

user.use('/',userRoutes);
user.use('/product',productRoutes);
user.use('/cart',cartRoutes)

export default user ;