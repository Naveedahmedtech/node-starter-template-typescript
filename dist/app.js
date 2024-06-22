"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_config_1 = __importDefault(require("./config/express.config"));
const error_handling_1 = __importDefault(require("./middlewares/error-handling"));
express_config_1.default.get("/hello", (req, res) => {
    res.send("hello world!");
});
// Global Error Handling Middleware
express_config_1.default.use(error_handling_1.default);
