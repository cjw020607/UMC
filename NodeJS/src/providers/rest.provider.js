import { restPreviewMissionResponseDTO } from "../dtos/rest.dto.js";
import { getPreviewMission } from "../models/rest.dao.js";

export const getMission=async(restId,query)=>{
    const {missionId,size=2}=query;
    return restPreviewMissionResponseDTO(await getPreviewMission(restId,size,missionId));
}