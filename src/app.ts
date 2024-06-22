import {
  NextFunction,
  Request,
  Response,
  router,
} from "./config/express.config";

const appRouter = router;

appRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const name = "world"; 
    res.send(`hello ${name}`);
  } catch (error) {
    next(error);
  }
});

export default appRouter;
