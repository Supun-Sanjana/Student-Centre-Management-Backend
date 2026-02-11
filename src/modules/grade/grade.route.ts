import { Router } from "express";
import { createGradeController } from "./grade.controller";

const gradeRouter = Router()
gradeRouter.post("/:centerId", createGradeController)

export default gradeRouter