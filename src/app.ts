import app, { Request, Response } from "./config/express.config";


app.get("/", (req: Request, res: Response) => {
  res.send("hello world!");
});
