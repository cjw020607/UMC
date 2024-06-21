import { status } from "../../config/resp.status.js";
import { response } from "../../config/response.js";
import { getUserOnProgressMissions, getUserReviews } from "../providers/user.provider.js";

export const userReviewPreview=async(req,res,next)=>{
    return res.send(response(status.SUCCESS,await getUserReviews(req.params.userId,req.query)));
}

export const userMissionOnProgress=async(req,res,next)=>{
    return res.send(response(status.SUCCESS,await getUserOnProgressMissions(req.params.userId,req.params.status,req.query)))
}