import cors from "cors";
import express from "express";
import healthRoutes from "./modules/health/health.routes";
import userRoute from "./modules/user/user.route";
import centerRouter from "./modules/center/center.route";
import gradeRouter from "./modules/grade/grade.route";
import studentRouter from "./modules/student/student.route";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/center", centerRouter);
app.use("/api/v1/grade", gradeRouter);
app.use("/api/v1/student", studentRouter);

export default app;
