//rest.service.js
import { BaseError } from "../../config/error.js";
import { status } from "../../config/resp.status.js";
import { addRestResponseDTO } from "../dtos/rest.dto.js";
import { addRest, getRegionIdByName, getRest } from "../models/rest.dao.js";

export const addRestaurant=async(body)=>{
    const region_object=await getRegionIdByName(body.address)
    if(region_object == -1){
        throw new BaseError(status.BAD_REQUEST);
    }
    const region_id=region_object[0][0].id
    const addRestData=await addRest({
        'name':body.name,
        'category':body.category,
        'address':body.address,
        'open_status':body.open_status,
        'region_id':region_id
    })
    if(addRestData == -1){
        throw new BaseError(status.BAD_REQUEST);
    }else{
        return addRestResponseDTO(await getRest(addRestData));
    }
}