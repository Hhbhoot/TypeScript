import mongoose, { Schema } from "mongoose";
import { ICart } from "../interfaces/ICart.interface";

const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    cartitem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    rentPerMonth: {
      type: Number,
    },
    rentalTimeInMonth : {
      type : Number
    },
    
    Image: {
      type: String,
    },
   
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

 const CartCollection = mongoose.model<ICart>("cart", cartSchema);

 export default CartCollection;
