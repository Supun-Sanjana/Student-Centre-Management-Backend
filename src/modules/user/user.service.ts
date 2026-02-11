import { json } from "node:stream/consumers";
import User from "./user.model";

//save user
export const saveUserService = async (data: any) => {
  const { firstName, lastName, email, password } = data;
  const res = await User.create({
    firstName,
    lastName,
    email,
    password,
  });
  return res;
};

//get all users
export const getAllUsersService = async () => {
  const users = await User.find();
  return users;
};

//get user by id
export const getUserByIdService = async (id: string) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("USER_NOT_FOUND");
  }

  return user;
};

//update user by id
export const updateUserService = async (id: string | string[], data: any) => {
  const res = await User.findOneAndUpdate(
    { _id: id }, // 1 filter
    {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    }, // 2 update
    { new: true },
  );

  return res;
};

//delelete user by id
export const deleteUserByIdService = async (id: string | string[]) => {
  const res = User.deleteOne({ _id: id });
  return res;
};
