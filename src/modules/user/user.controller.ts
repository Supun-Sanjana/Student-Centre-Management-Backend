import { Request, Response } from "express";
import {
  deleteUserByIdService,
  getAllUsersService,
  getUserByIdService,
  saveUserService,
  updateUserService,
} from "./user.service";

//save user
export const saveUserController = async (req: Request, res: Response) => {
  const data = req.body;

  const response = await saveUserService(data);
  return res.json({ message: "user saved!", response }).status(201);
};

//get all users
export const getAllUsersController = async (_: Request, res: Response) => {
  const data = await getAllUsersService();
  return res.json({ message: "fetch success", data }).status(200);
};

//get user by id
export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const user = await getUserByIdService(req.params.id as string);
    res.status(200).json(user);
  } catch (error: any) {
    if (error.message === "USER_NOT_FOUND") {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(500).json({ message: "Internal server error" });
  }
};

//update user by id
export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const updatedUser = await updateUserService(id, data);
  return res.json({ message: "user updated success", updatedUser });
};

//delelete user by id
export const deleteUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  deleteUserByIdService(id);
  return res.json({ message: "user deleted" });
};
