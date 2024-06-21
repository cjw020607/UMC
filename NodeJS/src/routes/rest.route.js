import express from "express";
import { missionAdd, missionGet, restAdd, reviewAdd } from "../controllers/rest.controller.js";

export const restRouter=express.Router();
restRouter.post('/add',restAdd);
restRouter.post('/review',reviewAdd);
restRouter.post('/mission',missionAdd);
restRouter.get('/:restId/missions',missionGet);