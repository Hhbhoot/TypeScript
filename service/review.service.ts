import Review from "../model/review.model";

export class reviewService {
  findAllReview = async (productId: string) => {
    return await Review.find({ cartitem: productId });
  };

  findUserReview = async (id: string, productId: any) => {
    return await Review.find({
      user: id,
      cartitem: productId,
      isDelete: false,
    });
  };

  updateReview = async (id: string, productId: any, body: any) => {
    return await Review.findOneAndUpdate(
      { user: id, cartitem: productId, isDelete: false },
      { $set: body }
    );
  };
}
