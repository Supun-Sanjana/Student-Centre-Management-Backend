import { Request, Response } from "express";

export const healthCheck = async (_: Request, res: Response) => {
  res.status(200).json({ status: 201 });
};
