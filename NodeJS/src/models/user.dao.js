import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/resp.status.js";
import { getMissionOPByUserId, getMissionOPByUserIdAtFirst, getReviewByUserId, getReviewByUserIdAtFirst, getUserClearMission, getUserOPMission, setProgClear } from "./user.sql.js";

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

export const getUserOPMisByUserId=async(userId)=>{
    try{
        const conn=await pool.getConnection();
        const [missionId]=await pool.query(getUserOPMission,[userId]);
        if(missionId.length == 0){
            return -1;
        }
        conn.release();
        return missionId;
    }catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}
export const setClearProg=async(missionIds)=>{
    try{
        const conn=await pool.getConnection();
        for(let i=0;i<missionIds.length;i++){
            console.log(missionIds[i])
            const result=await pool.query(setProgClear,[missionIds[i]]);
            if(result.length == 0){
                return -1;
            }
        }
        conn.release();
        return;
    }catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}

export const getUserClearByUserId=async(userId)=>{
    try{
        const conn=await pool.getConnection();
        const [result]=await pool.query(getUserClearMission,userId);
        if(result.length == 0){
            return -1;
        }
        console.log("z",result)
        conn.release();
        return result;
    }catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}