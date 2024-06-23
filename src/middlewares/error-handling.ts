import { NextFunction, Request, Response } from "express";
import logger from "../utils/common/logger";
import envConfig from "../config/env.config";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const config = envConfig;

  // Log the error
  logger.error(`[${new Date().toISOString()}] ${err.stack}`);

  // Send a generic error response in production
  if (config.get("NODE_ENV") === "prod") {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  // Send detailed error response in development
  res.status(500).json({
    message: "Error while processing your request",
    error: err.message,
  });
};

export default globalErrorHandler;

export const globalRouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log the error
  logger.error(`Resource not found --- PATH  ${req.originalUrl} ---`);
  res.status(404).json({
    message: "Error while processing your request",
    error: "Resource not found",
  });
};
