class AppError extends Error {
  public status_code: number;
  public status: string;
  public is_operational: boolean;

    constructor(message: string, status_code: number) {
        super(message);
        this.status_code = status_code;
        this.status = `${status_code}`.startsWith("4") ? "FAIL" : "ERROR";
        this.is_operational = true;

        Error.captureStackTrace(this, this.constructor);
  }
}


export default AppError;
