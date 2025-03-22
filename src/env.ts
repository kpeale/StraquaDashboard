import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_NAME: z.string(),
  },
  experimental__runtimeEnv: {
    // map client env from process.env
    NEXT_PUBLIC_APP_NAME: process.env.APP_NAME,
  },
  emptyStringAsUndefined: true,
});
