// repositories/paintingsRepository.ts
import { db } from "~/drizzle-db";

export const paintingsRepository = {
  getAll: async () => {
    return db.query.paintingsTable.findMany({
      with: { images: true },
    });
  },

  getById: async (id: number) => {
    return db.query.paintingsTable.findFirst({
      where: (paintings, { eq }) => eq(paintings.id, id),
      with: { images: true },
    });
  },
};
