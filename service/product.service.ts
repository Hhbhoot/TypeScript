import Product from "../model/product.model";

export class productService{
     
     addProduct = async(body : any)=>{
         return await Product.create(body)
     }

}