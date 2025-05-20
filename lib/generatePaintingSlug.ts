export const generatePaintingSlug = (paintingName: string) => {
  return paintingName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};
