import express from 'express';
import { verifyToken } from '../../Helpers/verifytoken';
import { addToCart, removeFromCart, updateCart } from '../../controller/user/cart.controller';
const cartRoutes = express.Router();

cartRoutes.post('/addtocart',verifyToken,addToCart);
cartRoutes.put('/updatecart',verifyToken,updateCart);
cartRoutes.put('/removefromcart',verifyToken,removeFromCart);
export default cartRoutes ;