import { Router } from "express";
import { createCenterController } from "./center.controller";

const centerRouter = Router()
centerRouter.post("/", createCenterController)

export default centerRouter