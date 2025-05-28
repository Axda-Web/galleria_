// hooks/queries/usePaintings.ts
import { useQuery } from "@tanstack/react-query";
import { paintingsRepository } from "~/repositories/paintingsRepository";

// Query keys
const PAINTINGS_KEYS = {
  count: ["paintings", "count"] as const,
  carouselLinks: (paintingId: number, paintingsCount: number) =>
    ["paintings", "carousel-Links", paintingId, paintingsCount] as const,
  all: ["paintings"] as const,
  details: (id: number) => ["paintings", id] as const,
};

// Queries
export function usePaintingsCount() {
  return useQuery({
    queryKey: PAINTINGS_KEYS.count,
    queryFn: paintingsRepository.getCount,
  });
}

export function usePaintingsCarouselLinks(
  paintingId: number,
  paintingsCount: number
) {
  return useQuery({
    queryKey: PAINTINGS_KEYS.carouselLinks(paintingId, paintingsCount),
    queryFn: () =>
      paintingsRepository.getPaintingsCarouselLinks(paintingId, paintingsCount),
    enabled: !!paintingId && !!paintingsCount,
  });
}

export function useAllPaintings() {
  return useQuery({
    queryKey: PAINTINGS_KEYS.all,
    queryFn: paintingsRepository.getAll,
  });
}

export function usePaintingDetails(id: number) {
  return useQuery({
    queryKey: PAINTINGS_KEYS.details(id),
    queryFn: () => paintingsRepository.getById(id),
    enabled: !!id,
  });
}
