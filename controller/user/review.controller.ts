import reviewCollection from "../../model/review.model";
import productCollection from "../../model/product.model";
import { Request, Response } from "express";
import { reviewService } from "../../service/review.service";
import { IReview } from "../../interfaces/IReview.interface";
import mongoose from "mongoose";
const ReviewService = new reviewService();

const avg_Rating = async (id: string) => {
  let allRating = await ReviewService.findAllReview(id);
  let countRating = allRating.length;

  let ratingArray = allRating.map((item) => ({
    rating: item.rating,
  }));

  //  console.log(ratingArray)
  let totalrating = ratingArray.reduce(
    (total, val) => (total += val.rating),
    0
  );
  //  console.log(totalrating)

  let avg_Rating = totalrating / countRating;

  let updateRating = await reviewCollection.updateMany(
    { cartitem: id, isDelete: false },
    { $set: { avg_Rating: avg_Rating } },
    { new: true }
  );
};

export const addReview = async (req: Request, res: Response) => {
  try {
    let { productId } = req.body;
    const userObj = req.user;

    let review = await ReviewService.findUserReview(userObj._id, productId);
    // console.log(review);
    let product = await productCollection.findById(productId);

    if (review.length != 0) {
      let updateReview = await ReviewService.updateReview(
        userObj._id,
        productId,

        { ...req.body }
      );

      avg_Rating(productId);

      if (updateReview) {
        return res
          .status(200)
          .json({ message: "Review updated successfully.." });
      } else {
        return res
          .status(400)
          .json({ message: "Something went wrong..fail to update review.." });
      }
    }
    let newReview: IReview = await reviewCollection.create({
      ...req.body,
      model : product?.model,
      user: req.user._id,
      cartitem: productId,
    });

    avg_Rating(productId);

    if (newReview) {
      return res
        .status(201)
        .json({ message: "Review submitted successfully..." });
    } else {
      return res
        .status(400)
        .json({ message: "something went wrong.Review not added.." });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server error..", Error: error });
  }
};

export const deleteReview = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;

    let review = await ReviewService.updateReview(req.user._id, productId, {
      isDelete: true,
    });
    if (review) {
      return res.status(200).json({ message: "Review deleted successfully.." });
    } else {
      return res
        .status(400)
        .json({ message: "something went wrong..failed to delete review" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error.." });
  }
};
