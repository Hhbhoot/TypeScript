import mongoose, { Schema } from "mongoose";
import { IProduct} from "../interfaces/IProduct.interface";

const productSchema: Schema = new Schema({
  brand: {
    type: String,
    required : true
    
  },
  model: {
    type: String,
    required : true
    
  },
  year: {
    type: Number,
    required : true
    
  },
  price: {
    type: Number,
    required : true
  },
  image : [{
     type : String,
     required: true
  }],
category : {
   type : String,
   required : true
},
  owner: {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    required: true,
    },
  },
  isDelete : {
    type : Boolean,
    default : false
  }
});

const productCollection = mongoose.model<IProduct>('product', productSchema);

export default productCollection;
