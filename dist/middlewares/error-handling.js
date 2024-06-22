"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../utils/common/logger"));
const globalErrorHandler = (err, req, res, next) => {
    logger_1.default.error(err);
    err.status_code = err.status_code || 5000;
    err.status = err.status || "ERROR";
    res.status(err.status_code).json({
        status: err.status,
        message: err.message,
    });
};
exports.default = globalErrorHandler;
