import express from "express";
const user = express.Router();

import userRoutes from "./user.routes";
import productRoutes from "./product.routes";
import cartRoutes from "./cart.routes";
import orderRoutes from "./order.routes";
import wishlistRoutes from "./wishlist.routes";
import reviewRoutes from "./review.routes";

user.use('/',userRoutes);
user.use('/product',productRoutes);
user.use('/cart',cartRoutes);
user.use('/order',orderRoutes);
user.use('/wishlist',wishlistRoutes);
user.use('/review',reviewRoutes);

export default user ;