"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
class EnvConfig {
    constructor() {
        dotenv_1.default.config();
        this.envState = process.env.NODE_ENV;
        this.loadConfig();
    }
    loadConfig() {
        const envState = this.envState;
        console.log(`Environment state: ${envState}`);
        if (envState !== "prod") {
            const configFile = path_1.default.resolve(__dirname, `../../.env.${envState}`);
            console.log(`Loading configuration from: ${configFile}`);
            dotenv_1.default.config({ path: configFile });
        }
        else {
            console.log("Loading default configuration");
            dotenv_1.default.config();
        }
    }
    static getInstance() {
        if (!EnvConfig.instance) {
            EnvConfig.instance = new EnvConfig();
        }
        return EnvConfig.instance;
    }
    get(key) {
        return process.env[key];
    }
}
exports.default = EnvConfig.getInstance();
