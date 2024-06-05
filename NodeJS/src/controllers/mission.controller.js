import { status } from "../../config/resp.status.js";
import { response } from "../../config/response.js";
import { addOnProgress } from "../services/mission.service.js";

export const misOnProg=async(req,res,next)=>{
    console.log("미션이 진행중입니다!");
    console.log("body:",req.body);
    res.send(response(status.SUCCESS,await addOnProgress(req.body)));
}