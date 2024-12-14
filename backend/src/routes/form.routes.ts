import express from "express";
import wrapAsync from "../utils/wrapAsync";
import { newEntry } from "../controllers/form.controller";
import { errorHandler } from "../middlewares/ErrorMiddleware";

const formControl = express.Router();
formControl.use(express.json());

formControl.post("/new", newEntry);
formControl.use(errorHandler);

export default formControl;
