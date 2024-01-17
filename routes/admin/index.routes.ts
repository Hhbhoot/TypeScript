import express from "express";
const admin = express.Router();

import productRoutes from "./product.route";
import cartRoutes from "./cart.routes";
import customerRoutes from "./customer.routes";
import orderRoutes from "./order.routes";

admin.use('/user',customerRoutes);
admin.use('/product',productRoutes);
admin.use('/cart',cartRoutes);
admin.use('/order' , orderRoutes);
export default admin;