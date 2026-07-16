import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
import path from "path";

// Load environment variables as per start command
const envPath = path.resolve(process.cwd(), process.env.NODE_ENV === "production" ? ".env.production" : ".env.development");
dotenv.config({ path: envPath });

export default defineConfig({
  schema: "./shared/schemas/index.ts",
  out: "./server/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
