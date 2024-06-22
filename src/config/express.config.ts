import express, { Request, Response, NextFunction } from "express";

const app = express();
const router = express.Router();

export default app;
export { Request, Response, NextFunction, router };
