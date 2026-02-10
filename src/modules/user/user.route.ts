import { Router } from "express";
import { deleteUserByIdController, getAllUsersController, getUserByIdController, saveUserController, updateUserController } from "./user.controller";

const userRoute = Router();

userRoute.post("/", saveUserController);
userRoute.get("/", getAllUsersController);
userRoute.get("/:id", getUserByIdController);
userRoute.put("/:id", updateUserController);
userRoute.delete("/:id", deleteUserByIdController);

export default userRoute;
