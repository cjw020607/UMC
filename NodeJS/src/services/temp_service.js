
import { status } from "../../config/res_status.js";
import { flagResponseDTO, tempResponseDTO } from "../dtos/temp_response_dto.js";


export const getTempData = () => {
    return tempResponseDTO("This is TEST! >.0");
}

export function CheckFlag(flag){
    if(flag == 1)
        throw new BaseError(status.BAD_REQUEST);   // 에러 발생시키기!
    else{
        return flagResponseDTO(flag);
    }
}