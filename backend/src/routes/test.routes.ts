import express from "express";
import wrapAsync from "../utils/wrapAsync";

const testControl = express.Router();

testControl.get("/", wrapAsync(async (req, res) => {
    res.send("Test Route is working!")
}));

export default testControl;