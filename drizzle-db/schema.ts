import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { relations, InferSelectModel } from "drizzle-orm";
import { sql } from "drizzle-orm";

export const paintingsTable = sqliteTable("paintings", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  artist: text().notNull(),
  description: text().notNull(),
  year: int().notNull(),
  sourceUrl: text().notNull(),
  createdAt: int("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const imagesTable = sqliteTable("images", {
  id: int().primaryKey({ autoIncrement: true }),
  paintingId: int().references(() => paintingsTable.id),
  type: text("type", {
    enum: ["thumbnail", "heroSmall", "heroLarge", "gallery", "artist"],
  }).notNull(),
  url: text().notNull(),
  createdAt: int("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: int("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const paintingsRelations = relations(paintingsTable, ({ many }) => ({
  images: many(imagesTable),
}));
export const imagesRelations = relations(imagesTable, ({ one }) => ({
  painting: one(paintingsTable, {
    fields: [imagesTable.paintingId],
    references: [paintingsTable.id],
  }),
}));

export type Painting = InferSelectModel<typeof paintingsTable>;
export type Image = InferSelectModel<typeof imagesTable>;
