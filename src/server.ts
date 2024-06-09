// project files
import { app, dotEvn } from "./config";
import envConfig from "./config/env.config";

const config = envConfig;

const PORT = config.get("PORT") || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
