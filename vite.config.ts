import { UserConfigExport, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import devcert from "devcert";

export default async (): Promise<UserConfigExport> => {
  const { key, cert } = await devcert.certificateFor("localhost");

  const config: UserConfigExport = {
    plugins: [react()],
    resolve: {
      alias: {
        "@/": path.join(__dirname, "src/"),
      },
    },
  };

  if (process.env.MODE === "LOCAL") {
    return {
      ...config,
      server: {
        port: 3000,
        open: true,
        https: {
          key,
          cert,
        },
      },
    };
  }
  if (process.env.MODE === "TEST") {
    return {
      ...config,
      server: {
        host: true,
        port: 3001,
      },
    };
  }

  return config;
};
