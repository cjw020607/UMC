import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/resp.status.js";
import { getReviewByUserId, getReviewByUserIdAtFirst } from "./user.sql.js";

export const getUserPreviewReview = async (cursorId,size,userId)=>{
    console.log(cursorId);
    console.log(size);
    console.log(parseInt(userId));

    try {
        const conn = await pool.getConnection();
        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [reviews] = await pool.query(getReviewByUserIdAtFirst, [parseInt(userId), parseInt(size)]);
            conn.release();
            console.log(reviews);
            return reviews;
    
        }else{
            const [reviews] = await pool.query(getReviewByUserId, [parseInt(userId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            // console.log(reviews);
            return reviews;    
        }
    } catch (err) {
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}