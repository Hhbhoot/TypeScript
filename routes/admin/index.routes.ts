import express from "express";
const admin = express.Router();

import productRoutes from "./product.route";

admin.use('/',productRoutes);

export default admin;