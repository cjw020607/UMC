import express from 'express';
import { misOnProg } from '../controllers/mission.controller.js';
export const missionRouter=express.Router();
missionRouter.post('/progress',misOnProg);