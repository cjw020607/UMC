import express from "express";
import { restAdd } from "../controllers/rest.controller.js";

export const restRouter=express.Router();
restRouter.post('/add',restAdd);