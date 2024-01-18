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
            },
            {
                $lookup: {
                  from: "reviews",        // The name of the second collection
                  localField: "model",          // The field from the first collection
                  foreignField: "model",   // The field from the second collection
                  as: "Reviews"            // The alias for the resulting array
                }
              
        },{
            $project : {
                "Reviews._id": 0,
                "Reviews.cartitem": 0,
                "Reviews.model": 0,
                "Reviews.isDelete": 0,
                "Reviews.__v": 0,
            }
        }
    
    ])
     };

     findByCategory = async(category : any )=>{
         return await Product.aggregate([{
            $match : 
             {
                category : category,
                isDelete : false
             }
         }])
     }
     



}