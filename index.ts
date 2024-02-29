import express, { Request, Response } from "express";

const app = express();
const PORT = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Welcome to your new server");
});
app.listen(PORT, () => {
  console.log("Server Running on Port 5000");
});
