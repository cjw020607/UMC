import { BaseError } from "../../config/error.js";
import { status } from "../../config/resp.status.js";
import { addMissionResponseDTO, addOnProgResponseDTO } from "../dtos/mission.dto.js";
import { addMis, getMis, getUserMis, getUserMisWithId, setOnProg } from "../models/mission.dao.js";
import { getRest } from "../models/rest.dao.js";



export const addMission=async(body)=>{
    const restaurant=await getRest(body.restaurant_id);
    //입력받은 식당이 존재하지 않을 경우
    if(restaurant == -1){
        throw new BaseError(status.BAD_REQUEST);
    }
    const addMisId=await addMis({
        'restaurant_id':body.restaurant_id,
        'left_date':body.left_date,
        'content':body.content,
        'reward':body.reward,
        'certification_num':body.certification_num
    })
    if(addMisId == -1){
        throw new BaseError(status.BAD_REQUEST);
    }else{
        return addMissionResponseDTO(await getMis(addMisId));
    }
}

export const addOnProgress=async(data)=>{
    const userMission=await getUserMis(data);
    if(userMission==-1||userMission[0].status=="진행중"){
        throw new BaseError(status.BAD_REQUEST);
    }
    const setProgId=await setOnProg(userMission[0].id);
    if(setProgId==-1){
        throw new BaseError(status.BAD_REQUEST);
    }
    else{
        console.log(await getUserMisWithId(setProgId));
        return addOnProgResponseDTO(await getUserMisWithId(setProgId));
    }
}
