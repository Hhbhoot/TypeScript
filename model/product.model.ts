import mongoose, { Schema } from "mongoose";
import { IProduct} from "../interfaces/IProduct.interface";

const productSchema: Schema = new Schema({
  brand: {
    type: String,
    
  },
  model: {
    type: String,
    
  },
  year: {
    type: Number,
    
  },
  price: {
    type: Number,
    // required: true
  },
  profileimage : [{
     type : String,
  }],
  owner: {
    name: {
      type: String,
      // required: true,
    },
    contact: {
      type: String,
      // required: true,
    },
    location: {
      type: String,
      // required: true,
    },
  },
});

const productCollection = mongoose.model<IProduct>('product', productSchema);

export default productCollection;
