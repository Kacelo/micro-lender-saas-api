import express, { Request, Response } from "express";
import dotenv from "dotenv";
import databaseConnection from "./src/database/database";

const app = express();
const PORT = 5000;
dotenv.config();
databaseConnection();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Welcome to your new server");
});
app.listen(PORT, () => {
  console.log("Server Running on Port 5000");
});
