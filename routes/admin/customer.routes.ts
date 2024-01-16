import express from "express";
import { verifyAdmin } from "../../Helpers/verifyAdmin";
import { verifyToken } from "../../Helpers/verifytoken";
import { getAllUser, getSpecificUser } from "../../controller/admin/customer.controller";
const customerRoutes = express.Router();

customerRoutes.get('/getallusers',verifyToken,verifyAdmin,getAllUser);
customerRoutes.get('/getspecificuser',verifyToken,verifyAdmin,getSpecificUser)

export default customerRoutes ;