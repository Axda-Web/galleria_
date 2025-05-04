import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  driver: "expo",
  schema: "./drizzle-db/schema.ts",
  out: "./drizzle-db/migrations",
});
