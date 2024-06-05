import { BaseError } from "../../config/error.js";
import { status } from "../../config/resp.status.js";
import { addReviewResponseDTO } from "../dtos/review.dto.js";
import { getRest } from "../models/rest.dao.js";
import { addRev, getReview } from "../models/review.dao.js";

export const addReview=async(body)=>{
    const restaurant=await getRest(body.restaurant_id);
    //입력받은 식당이 존재하지 않을 경우
    if(restaurant == -1){
        throw new BaseError(status.BAD_REQUEST);
    }
    const addReviewData=await addRev({
        'member_id':body.member_id,
        'restaurant_id':body.restaurant_id,
        'rate':body.rate,
        'content':body.content
    })
    if(addReviewData == -1){
        throw new BaseError(status.BAD_REQUEST);
    }else{
        return addReviewResponseDTO(await getReview(addReviewData));
    }
}