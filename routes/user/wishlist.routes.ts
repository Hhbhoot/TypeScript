import express from "express"
import { verifyToken } from "../../Helpers/verifytoken";
import { addToWishlist, getUserWishlist, removeFromWishlist } from "../../controller/user/wishlist.controller";
const wishlistRoutes = express.Router();

wishlistRoutes.post('/addtowishlist',verifyToken,addToWishlist);
wishlistRoutes.put('/removefromwishlist',verifyToken,removeFromWishlist);
wishlistRoutes.get('/getUserWatchlist',verifyToken,getUserWishlist)

export default wishlistRoutes ;