import { Router } from "express"
import { healthCheck } from "./health.controller"

const healthRoutes = Router()

healthRoutes.get("/", healthCheck)

export default healthRoutes
