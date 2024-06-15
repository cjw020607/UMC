import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/resp.status.js";
import { addReviews, getReviews } from "./review.sql.js";

export const addRev = async (body) => {
    try{
        console.log("data:",body);
        const conn = await pool.getConnection();
        const [result]=await pool.query(addReviews,[
            body.member_id,
            body.restaurant_id,
            body.rate,
            body.content
        ]);
        if(result.length == 0){
            return -1;
        }
        conn.release();
        return result.insertId; //insertId는 삽입된 데이터의 id값을 반환한다.
    }
    catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}

export const getReview=async(reviewId)=>{
    try{
        const conn = await pool.getConnection();
        const [result]=await pool.query(getReviews,reviewId);
        if(result.length == 0){
            return -1;
        }
        conn.release();
        return result;
    }catch(err){
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
    
}