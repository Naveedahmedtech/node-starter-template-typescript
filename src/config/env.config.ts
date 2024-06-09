import dotenv from "dotenv";
import path from "path";

class EnvConfig {
  private static instance: EnvConfig;
  private envState: string | undefined;

  private constructor() {
    dotenv.config();
    this.envState = process.env.NODE_ENV;
    this.loadConfig();
  }

  private loadConfig() {
    const envState = this.envState;
    console.log(`Environment state: ${envState}`);

    if (envState !== "prod") {
      const configFile = path.resolve(__dirname, `../../.env.${envState}`);
      console.log(`Loading configuration from: ${configFile}`);
      dotenv.config({ path: configFile });
    } else {
      console.log("Loading default configuration");
      dotenv.config();
    }
  }

  public static getInstance(): EnvConfig {
    if (!EnvConfig.instance) {
      EnvConfig.instance = new EnvConfig();
    }
    return EnvConfig.instance;
  }

  public get(key: string): string | undefined {
    return process.env[key];
  }
}

export default EnvConfig.getInstance();
