import { status } from "../../config/resp.status.js";
import { response } from "../../config/response.js";
import { addRestaurant } from "../services/rest.service.js";
import { addReview } from "../services/review.service.js";

export const restAdd=async(req,res,next)=>{
    console.log("식당이 추가됐습니다!");
    console.log("body:",req.body);
    res.send(response(status.SUCCESS,await addRestaurant(req.body)));
}

export const reviewAdd=async(req,res,next)=>{
    console.log("리뷰가 추가되었습니다!");
    console.log("body:",req.body);
    res.send(response(status.SUCCESS,await addReview(req.body)));
}