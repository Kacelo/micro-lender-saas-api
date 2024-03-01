import { Request, Response } from "express";
import User from "../../models/users.model";
import asyncHandler from "express-async-handler";
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    homeAddress,
    occupation,
    bank,
    accountNumber,
    idNumber,
  } = req.body;
  //   1. check if the user exists
  const userExists = await User.findOne({ idNumber });
  if (userExists) {
    res.status(409).json({ message: "The email already exists" });
  }
  //   2. save user information
  const user = await User.create({
    firstName,
    lastName,
    phoneNumber,
    homeAddress,
    occupation,
    bank,
    accountNumber,
    idNumber,
  });

  res.json({ message: "Register User,", user });
});

const loginUser = (req: Request, res: Response) => {
  res.json({ message: "Login User" });
};

const getLoggedInUser = (req: Request, res: Response) => {
  res.json({ message: "Logged In User data" });
};

export { registerUser, loginUser, getLoggedInUser };
