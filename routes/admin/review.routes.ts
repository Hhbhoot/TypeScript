import express from "express";
import { verifyToken } from "../../Helpers/verifytoken";
import {verifyAdmin} from '../../Helpers/verifyAdmin'
import { getAllUserReview, getSpecificUserReview } from "../../controller/admin/review.controller";
const reviewRoutes = express.Router();

reviewRoutes.get('/alluserreview',verifyToken,verifyAdmin,getAllUserReview);
reviewRoutes.get('/specificuserreview',verifyToken,verifyAdmin,getSpecificUserReview);

export default reviewRoutes ;