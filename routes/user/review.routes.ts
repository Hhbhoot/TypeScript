import express from "express";
import { verifyToken } from "../../Helpers/verifytoken";
import { addReview, deleteReview } from "../../controller/user/review.controller";

const reviewRoutes = express.Router();

reviewRoutes.post('/addreview',verifyToken,addReview);
reviewRoutes.put('/deletereview',verifyToken,deleteReview)

export default reviewRoutes ;