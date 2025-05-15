import { generatePaintingSlug } from "~/lib/generatePaintingSlug";

export const NAV = {
  HOME: "/",
  PAINTING: (paintingName: string) =>
    `/painting/${generatePaintingSlug(paintingName)}`,
} as const;
