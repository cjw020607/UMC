import { userPreivewReviewResponseDTO, userPreviewMissionOPResponseDTO } from "../dtos/user.dto.js";
import { getUserPreviewMissionOP, getUserPreviewReview } from "../models/user.dao.js";

export const getUserReviews=async(userId,query)=>{
    const {reviewId,size=3}=query;
    return userPreivewReviewResponseDTO(await getUserPreviewReview(reviewId,size,userId));
}

export const getUserOnProgressMissions=async(userId,status,query)=>{
    const {missionId,size=2}=query;
    return userPreviewMissionOPResponseDTO(await getUserPreviewMissionOP(missionId,size,userId,status));
}