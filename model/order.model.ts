import mongoose, { Schema } from "mongoose";
import { IOrder } from "../interfaces/IOrder.interface";


const orderSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  item: [
    { cartitem : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
    required: true
    }
  }
],
  startDate: {
    type: Date,
    required: true,
    default : Date.now()
  },
  endDate: {
    type: Date,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  isDelete : {
    type : Boolean,
    default : false
  }
}, { timestamps: true });

// Create the Order model
const orderCollection = mongoose.model<IOrder>('order', orderSchema);

export default orderCollection ;


