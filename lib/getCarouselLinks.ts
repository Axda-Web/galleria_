import { db } from "~/drizzle-db";
import { eq, asc, desc } from "drizzle-orm";
import { generatePaintingSlug } from "./generatePaintingSlug";
import { paintingsTable } from "~/drizzle-db/schema";

export const getCarouselLinks = async (
  paintingId: number,
  paintingsCount: number
) => {
  const previousPaintingId = paintingId - 1;
  const nextPaintingId = paintingId + 1;

  const [
    previousPaintingName,
    nextPaintingName,
    firstPaintingName,
    lastPaintingName,
  ] = await Promise.all([
    db
      .select({ name: paintingsTable.name })
      .from(paintingsTable)
      .where(eq(paintingsTable.id, previousPaintingId)),
    db
      .select({ name: paintingsTable.name })
      .from(paintingsTable)
      .where(eq(paintingsTable.id, nextPaintingId)),
    db
      .select({ name: paintingsTable.name })
      .from(paintingsTable)
      .orderBy(asc(paintingsTable.id))
      .limit(1),
    db
      .select({ name: paintingsTable.name })
      .from(paintingsTable)
      .orderBy(desc(paintingsTable.id))
      .limit(1),
  ]);

  const previousPaintingLink =
    paintingId > 1
      ? `/painting/${generatePaintingSlug(
          previousPaintingName[0].name
        )}?id=${previousPaintingId}`
      : `/painting/${generatePaintingSlug(
          lastPaintingName[0].name
        )}?id=${paintingsCount}`;

  const nextPaintingLink =
    paintingId < paintingsCount
      ? `/painting/${generatePaintingSlug(
          nextPaintingName[0].name
        )}?id=${nextPaintingId}`
      : `/painting/${generatePaintingSlug(firstPaintingName[0].name)}?id=${1}`;

  return {
    previousPaintingLink,
    nextPaintingLink,
  };
};
