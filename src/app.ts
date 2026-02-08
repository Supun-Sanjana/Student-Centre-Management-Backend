import cors from "cors";
import express from "express";
import healthRoutes from "./modules/health/health.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/health", healthRoutes);

export default app;
