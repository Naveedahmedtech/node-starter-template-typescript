import express, { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import routes from "../../app";
import globalErrorHandler from "../../middlewares/error-handling";


// Interfaces && DI && Encapsulation

class App {
  private static instance: App;
  private express: any;

  constructor() {
    this.express = express();
    this.config();
    this.routes();
    this.errorHandler();
  }

  // ** Encapsulation --> can't modify outside of the class
  public config() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
  }
  // ** Encapsulation --> can't modify outside of the class
  public static getInstance() {
    if (!this.instance) {
      this.instance = new App();
    }
    return this.instance;
  }
  // ** Encapsulation --> can't modify outside of the class
  public routes() {
    this.express.use("/", routes);
  }
  // ** Encapsulation --> can't modify outside of the class
  public errorHandler() {
    this.express.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        globalErrorHandler(err, req, res, next);
      }
    );
  }

  public start(port: number | string) {
    this.express.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  }
}

export default App.getInstance();
