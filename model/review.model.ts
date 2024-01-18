import mongoose, { Schema, mongo } from "mongoose";
import { IReview } from "../interfaces/IReview.interface";

const reviewSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    cartitem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    model : {
      type : String
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    Comment: {
      type: String,
    },
    avg_Rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
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

const reviewCollection = mongoose.model<IReview>('review',reviewSchema);

export default reviewCollection ;
