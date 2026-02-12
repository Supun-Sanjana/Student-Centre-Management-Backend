import { Router } from "express";
import { createStudentController } from "./student.controller";

const studentRouter = Router();

studentRouter.post("/:gradeId", createStudentController);

export default studentRouter