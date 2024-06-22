"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.dotEvn = void 0;
var env_config_1 = require("./env.config");
Object.defineProperty(exports, "dotEvn", { enumerable: true, get: function () { return __importDefault(env_config_1).default; } });
var express_config_1 = require("./express.config");
Object.defineProperty(exports, "app", { enumerable: true, get: function () { return __importDefault(express_config_1).default; } });
