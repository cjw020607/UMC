import express from 'express';
import { tempException, tempTest } from '../controllers/temp_controller.js';


export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);

tempRouter.get('/exception/:flag',tempException);