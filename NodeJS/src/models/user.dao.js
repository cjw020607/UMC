import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/resp.status.js";
import { getMissionOPByUserId, getMissionOPByUserIdAtFirst, getReviewByUserId, getReviewByUserIdAtFirst } from "./user.sql.js";

export const getUserPreviewReview = async (cursorId,size,userId)=>{
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

export const getUserPreviewMissionOP=async(cursorId,size,userId,status)=>{
    try{
        const conn=await pool.getConnection();
        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null){
            const [missions]=await pool.query(getMissionOPByUserIdAtFirst,[parseInt(userId),status,parseInt(size)]);
            conn.release();
            return missions;
        }
        else{
            const [missions]=await pool.query(getMissionOPByUserId,[parseInt(userId),status,parseInt(cursorId),parseInt(size)]);
            conn.release();
            return missions;
        }
    }catch(err){
        console.log(err);
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}