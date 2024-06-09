"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const ENV_STATE = process.env.NODE_ENV;
if (ENV_STATE !== "prod") {
    const config_file = path_1.default.join(__dirname, ".." + `.env.${ENV_STATE}`);
    dotenv_1.default.config({ path: config_file });
}
else {
    dotenv_1.default.config();
}
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("hello world!");
});
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
