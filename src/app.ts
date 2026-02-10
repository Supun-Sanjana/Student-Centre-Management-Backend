import cors from "cors";
import express from "express";
import healthRoutes from "./modules/health/health.routes";
import userRoute from "./modules/user/user.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/user", userRoute);

export default app;
