import { BaseError } from "../../config/error.js";
import { status } from "../../config/resp.status.js";
import { updateProgClearResponseDTO } from "../dtos/user.dto.js";
import { getUserClearByUserId, getUserOPMisByUserId, setClearProg } from "../models/user.dao.js";

export const clearUserMission=async(data)=>{
    const missionId=await getUserOPMisByUserId(data.userId);
    if(missionId==-1){
        throw new BaseError(status.BAD_REQUEST);
    }
    else{
    const missionIds = missionId.map(item => item.id);
    await setClearProg(missionIds);
    return updateProgClearResponseDTO(await getUserClearByUserId(data.userId));
    }
}