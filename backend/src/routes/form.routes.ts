import express from "express";
import wrapAsync from "../utils/wrapAsync";
import { newEntry } from "../controllers/form.controller";

const formControl = express.Router();
formControl.use(express.json())

formControl.post("/new",newEntry)

export default formControl