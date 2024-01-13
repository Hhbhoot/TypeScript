import express from "express";
const user = express.Router();

import userRoutes from "./user.routes";

user.use('/',userRoutes);

export default user ;