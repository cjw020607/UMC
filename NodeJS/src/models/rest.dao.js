import { pool } from "../../config/db.config.js";
import { status } from "../../config/resp.status.js";
import { addRestaurant, getRegionId, getRestaurant } from "./rest.sql.js";

export const addRest=async(restData)=>{
    try{
        console.log("data:",restData);
        const conn = await pool.getConnection();
        const [result]=await pool.query(addRestaurant,[
            restData.name,
            restData.category,
            restData.address,
            restData.open_status,
            restData.region_id
        ]);
        conn.release();
        return result.insertId; //insertId는 삽입된 데이터의 id값을 반환한다.
    }
    catch(err){
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}

export const getRest=async(restId)=>{
    try{
        const conn = await pool.getConnection();
        const [result]=await pool.query(getRestaurant,restId);
        console.log(restId,result)
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

export const getRegionIdByName=async(region_name)=>{
    try{
        const conn = await pool.getConnection();
        const region_id=await pool.query(getRegionId,[region_name]);

        if(region_id[0].length===0){
            return -1;
        }
        conn.release();
        return region_id;
    }
    catch(err){
        const region_id=await pool.query(getRegionId,[region_name]);
        console.log(err);
        throw new BaseError(status.INTERNAL_SERVER_ERROR);
    }
}