import express from "express";
import { restAdd, reviewAdd } from "../controllers/rest.controller.js";

export const restRouter=express.Router();
restRouter.post('/add',restAdd);
restRouter.post('/review',reviewAdd);