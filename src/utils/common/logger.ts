import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "error",
  format: format.json(),
  transports: [
    new transports.File({ filename: "error.log" }),
    new transports.Console(),
  ],
});

export default logger;
