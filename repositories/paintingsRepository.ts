import { db } from "~/drizzle-db";

export const paintingsRepository = {
  getAll: async () => {
    return await db.query.paintingsTable.findMany({
      with: { images: true },
    });
  },

  getById: async (id: number) => {
    return await db.query.paintingsTable.findFirst({
      where: (paintings, { eq }) => eq(paintings.id, id),
      with: { images: true },
    });
  },
};
