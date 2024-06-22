// project files
import app, { NextFunction, Request, Response } from "./config/express.config";
import routes from './app'
import envConfig from "./config/env.config";
import logger from "./utils/common/logger";

const config = envConfig;

const PORT = config.get("PORT") || 3000;



app.use("/", routes)

// Global error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Log the error
  logger.error(err.message);

  // Send a generic error response in production
  if (config.get("NODE_ENV") === "prod") {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  // Send detailed error response in development
  res.status(500).json({ message: 'Error while processing your request', error: err.message });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
