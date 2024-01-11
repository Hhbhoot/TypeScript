import mongoose, { Schema } from "mongoose";
import { IProduct } from "../interfaces/Ibussiness.interface";

const productSchema = new Schema({
 
      title : {
         type: String,
         required : true
      }
      
})