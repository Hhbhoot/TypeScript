import mongoose, { Schema } from "mongoose";
import { IBike } from "../interfaces/IProduct.interface";

const BikeSchema: Schema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  seller: {
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
});

const BikeModel = mongoose.model<IBike>('Bike', BikeSchema);

export default BikeModel;
