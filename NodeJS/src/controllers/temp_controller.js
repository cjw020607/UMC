
import { response } from '../../config/response.js';
import { status } from '../../config/res_status.js';
import { CheckFlag, getTempData } from '../services/temp_service.js';

export const tempTest = (req, res, next) => {
    res.send(response(status.SUCCESS, getTempData()));
};

export const tempException = (req, res, next) => {
    console.log("/temp/exception/"+req.params.flag);
    return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)));
}