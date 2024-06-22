import { NextFunction, Request, Response } from "express";
import AppError from "../utils/errors/app-error";
import logger from "../utils/common/logger";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(err.message);

  const error = err as AppError;
  const status_code = error.status_code || 500;
  const status = error.status || "ERROR";

  res.status(status_code).json({
    status,
    message: err.message,
  });
};

export default globalErrorHandler;
