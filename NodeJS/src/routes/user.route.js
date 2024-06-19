import express from "express";
import { userReviewPreview } from "../controllers/user.controller.js";
import expressAsyncHandler from "express-async-handler";
export const userRouter=express.Router({mergeParams:true});
userRouter.get('/:userId/reviews',expressAsyncHandler(userReviewPreview));