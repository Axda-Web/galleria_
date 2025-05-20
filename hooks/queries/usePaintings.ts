// hooks/queries/usePaintings.ts
import { useQuery } from "@tanstack/react-query";
import { paintingsRepository } from "~/repositories/paintingsRepository";

// Query keys
const PAINTINGS_KEYS = {
  all: ["paintings"] as const,
  details: (id: number) => ["paintings", id] as const,
};

// Queries
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
