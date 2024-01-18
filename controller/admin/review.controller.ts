import { Request, Response } from "express";
import { reviewService } from "../../service/review.service";
const ReviewService = new reviewService();

export const getAllUserReview = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;
    let reviews : any= await ReviewService.findAllReview(productId);
    if (reviews) {
      return res.status(200).json(reviews);
    } else {
      return res
        .status(400)
        .json({ message: "Something went wrong..Review not found.." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getSpecificUserReview = async(req : Request , res : Response)=>{
    try {
             const { id , productId} = req.body ;

             let review = await ReviewService.findUserReview(id , productId)
             if(review){
                 return res.status(200).json(review)
             }else{
                return res.status(400).json({ message : "Review not found..something went wrong.."})
             }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message : "Internal server error..",Error : error})
    }

}
