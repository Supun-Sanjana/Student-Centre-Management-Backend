import { Request, Response } from "express";
import { createStudentService } from "./student.service";

export const createStudentController = async (req: Request, res: Response) => {
  const data = req.body;
  const { gradeId } = req.params;
  try {
    if (!gradeId || Array.isArray(gradeId)) {
      return res.status(400).json({ message: "Invalid gradeId" });
    }
    const result = await createStudentService(data, gradeId);
    return res.status(201).json({ message: "student created", result });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

