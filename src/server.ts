import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world!");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
