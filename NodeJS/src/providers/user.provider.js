import { userPreivewReviewResponseDTO } from "../dtos/user.dto.js";
import { getUserPreviewReview } from "../models/user.dao.js";

export const getUserReviews=async(userId,query)=>{
    const {reviewId,size=3}=query;
    return userPreivewReviewResponseDTO(await getUserPreviewReview(reviewId,size,userId));
}