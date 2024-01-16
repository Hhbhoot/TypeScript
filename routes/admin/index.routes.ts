import express from "express";
const admin = express.Router();

import productRoutes from "./product.route";
import cartRoutes from "./cart.routes";
import customerRoutes from "./customer.routes";

admin.use('/user',customerRoutes);
admin.use('/product',productRoutes);
admin.use('/cart',cartRoutes)
export default admin;