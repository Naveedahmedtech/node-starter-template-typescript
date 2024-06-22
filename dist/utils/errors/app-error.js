"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(message, status_code) {
        super(message);
        this.status_code = status_code;
        this.status = `${status_code}`.startsWith("4") ? "FAIL" : "ERROR";
        this.is_operational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = AppError;
