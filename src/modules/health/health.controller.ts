import { Request, Response } from "express";
import { helthService } from "./helth.service";

export const healthCheck = async(req: Request, res: Response) => {
  const data= await helthService(req)
  res.status(200).json({ status: "ok" });
};
