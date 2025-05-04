import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const paintingsTable = sqliteTable("paintings", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  artist: text().notNull(),
  description: text().notNull(),
  year: int().notNull(),
  image: text().notNull(),
  createdAt: text().notNull(),
  updatedAt: text().notNull(),
});
