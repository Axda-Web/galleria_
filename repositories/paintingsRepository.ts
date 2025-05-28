import { count } from "drizzle-orm";
import { db } from "~/drizzle-db";
import { paintingsTable } from "~/drizzle-db/schema";
import { getCarouselLinks } from "~/lib/getCarouselLinks";

export const paintingsRepository = {
  getCount: async () => {
    const result = await db.select({ count: count() }).from(paintingsTable);
    return result[0].count;
  },

  getPaintingsCarouselLinks: async (
    paintingId: number,
    paintingsCount: number
  ) => {
    const { previousPaintingLink, nextPaintingLink } = await getCarouselLinks(
      paintingId,
      paintingsCount
    );
    return { previousPaintingLink, nextPaintingLink };
  },

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
