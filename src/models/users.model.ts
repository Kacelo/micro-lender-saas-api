import bcrypt from "bcrypt";
import mongoose, { Document, Schema, model } from "mongoose";

type ProfileType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  homeAddress: string;
  occupation: string;
  bank: string;
  accountNumber: string;
  idNumber: string;
};

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: string;
  profile: ProfileType;
  comparePassword: (enteredPassword: string) => Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["lender", "borrower"], required: true },
  profile: {
    type: {
      firstName: String,
      lastName: String,
      phoneNumber: String,
      homeAddress: String,
      occupation: String,
      bank: String,
      accountNumber: String,
      idNumber: String
    },
    required: true
  }
});

userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = model<IUser>("User", userSchema);

export default User;
