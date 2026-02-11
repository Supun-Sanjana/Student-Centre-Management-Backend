import { Request, Response } from "express";
import { createCenterService } from "./center.service";

//create center
export const createCenterController = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const response = await createCenterService(data);
    return res.json({ message: "center saved", response }).status(201);
  } catch (error) {
    return res.json({ message: "something went wrong", error }).status(500);
  }
};
