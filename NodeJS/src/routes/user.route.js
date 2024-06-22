import express from "express";
import { userMissionClear, userMissionOnProgress, userReviewPreview } from "../controllers/user.controller.js";
import expressAsyncHandler from "express-async-handler";
export const userRouter=express.Router({mergeParams:true});
userRouter.get('/:userId/reviews',expressAsyncHandler(userReviewPreview));
userRouter.get('/:userId/missions/:status',expressAsyncHandler(userMissionOnProgress));
userRouter.post('/missions/clear',expressAsyncHandler(userMissionClear));