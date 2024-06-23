import App from '../src/utils/common/main'
import envConfig from "./config/env.config";
const config = envConfig;

const PORT = config.get("PORT") || 3000;

App.start(PORT);
