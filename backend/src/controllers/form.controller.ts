import { Form } from "../models/form";
import wrapAsync from "../utils/wrapAsync";
import { Request, Response } from "express";

export const newEntry = wrapAsync(async (req: Request, res: Response) => {
  const content = req.body;
  let newData = new Form(content);
  await newData.save();
  res.send("Saved")
});
