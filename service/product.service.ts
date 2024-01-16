import Product from "../model/product.model";
import mongoose,{Types} from "mongoose";

export class productService{
     
     addProduct = async(body : any)=>{
         return await Product.create(body)
     };

     updateById= async(id : any ,body : any)=>{
        return await Product.findByIdAndUpdate(id , { $set : body},{new :true})
     };

     getAllProducts = async()=>{
        return await Product.aggregate([
            {
                $match : { isDelete : false}
            },
            {
                $project : {
                    owner : 0
                }
            }
        ]);
     };
     getProductDetails = async(id : any)=>{
          return await Product.aggregate([
            {
                $match : {
                    _id : new mongoose.Types.ObjectId(id),
                    isDelete : false
                }
            }
          ])
     };
     



}