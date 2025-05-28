import { View, ActivityIndicator } from "react-native";
import { Text } from "~/components/ui/text";
import { Link } from "expo-router";
import { usePaintingsCarouselLinks } from "~/hooks/queries/usePaintings";
import { useColorScheme } from "~/lib/useColorScheme";
import { ChevronFirst } from "~/lib/icons/ChevronFirst";
import { ChevronLast } from "~/lib/icons/ChevronLast";

type CarouselArrows = {
  paintingId: number;
  paintingsCount: number;
};

export function CarouselArrows({ paintingId, paintingsCount }: CarouselArrows) {
  const { isDarkColorScheme } = useColorScheme();
  const { data, isLoading, isError } = usePaintingsCarouselLinks(
    paintingId,
    paintingsCount
  );

  if (isLoading) return <ActivityIndicator />;
  if (isError) return <Text>Error</Text>;

  return (
    <View className="flex-row gap-8 ml-4">
      {/* @ts-expect-error - data is not defined */}
      <Link href={data.previousPaintingLink}>
        <ChevronFirst color={isDarkColorScheme ? "white" : "black"} size={24} />
      </Link>
      {/* @ts-expect-error - data is not defined */}
      <Link href={data.nextPaintingLink}>
        <ChevronLast color={isDarkColorScheme ? "white" : "black"} size={24} />
      </Link>
    </View>
  );
}
