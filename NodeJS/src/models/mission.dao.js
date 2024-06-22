import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/resp.status.js";
import { addMission, getMission, getMissionWithId, getUserMission, setProg } from "./mission.sql.js";

export const getMis=async(missId)=>{
    try{
        const conn = await pool.getConnection();
        const [result]=await pool.query(getMission,missId);
        if(result.length == 0){
            return -1;
        }
        conn.release();
        return result;
    }
    catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}

export const addMis=async(data)=>{
    try{
        const conn=await pool.getConnection();
        const [result]=await pool.query(addMission,[
            data.restaurant_id,
            data.left_date,
            data.content,
            data.reward,
            data.certification_num
        ]);
        if(result.length == 0){
            return -1;
        }
        conn.release();
        return result.insertId;
    }catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}

export const getUserMis=async(data)=>{
    try{
        const conn=await pool.getConnection();
        const [result]=await pool.query(getUserMission,[
            data.member_id,
            data.mission_id
        ]);
        if(result.length == 0){
            return -1;
        }
        conn.release();
        return result;
    }catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}

export const setOnProg=async(userMisId)=>{
    try{
        const conn=await pool.getConnection();
        const result=await pool.query(setProg,[userMisId]);
        if(result.length == 0){
            return -1;
        }
        conn.release();
        return;
    }catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}

export const getUserMisWithId=async(id)=>{
    try{
        const conn=await pool.getConnection();
        const [result]=await pool.query(getMissionWithId,[id]);
        if(result.length == 0){
            return -1;
        }
        conn.release();
        return result;
    }catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}
