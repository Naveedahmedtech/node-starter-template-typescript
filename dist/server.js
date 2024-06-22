"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// project files
const config_1 = require("./config");
const env_config_1 = __importDefault(require("./config/env.config"));
const config = env_config_1.default;
const PORT = config.get("PORT") || 3000;
config_1.app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
