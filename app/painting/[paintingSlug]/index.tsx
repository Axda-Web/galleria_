import { View, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  usePaintingDetails,
  usePaintingsCount,
} from "~/hooks/queries/usePaintings";
import { mapAssetUrl } from "~/lib/mapAssetUrl";
import { LocalImage } from "~/components/local-image";
import { CarouselArrows } from "~/components/carousel-arrows";
import { PaintingLightbox } from "~/components/lightbox-cta";

export default function PaintingScreen() {
  const { id } = useLocalSearchParams();
  const { t } = useTranslation();
  const { data: painting, isLoading, isError } = usePaintingDetails(Number(id));
  const {
    data: paintingsCount,
    isLoading: isPaintingsCountLoading,
    isError: isPaintingsCountError,
  } = usePaintingsCount();

  if (isLoading || isPaintingsCountLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError || isPaintingsCountError) {
    return <Text>Error</Text>;
  }

  const heroSmallURI = mapAssetUrl(painting?.images[1].url!);
  const artistURI = mapAssetUrl(painting?.images[4].url!);
  const galleryURI = mapAssetUrl(painting?.images[3].url!);

  return (
    <View className="flex-1">
      <ScrollView className="flex-1 p-4">
        <View className="relative">
          <PaintingLightbox imageUri={galleryURI} />
          <LocalImage uri={heroSmallURI} />
        </View>
        <View className="p-4 -mt-16 max-w-80 bg-background">
          <View className="py-2">
            <Text className="text-3xl font-libre-baskerville-bold text-foreground">
              {painting?.name}
            </Text>
            <Text className="text-lg text-gray-500 font-libre-baskerville">
              {painting?.artist}
            </Text>
          </View>
          <LocalImage uri={artistURI} className="max-w-16 max-h-16 mt-4" />
        </View>
        <View className="-mt-8">
          <Text className="text-9xl text-right text-gray-500/10 font-libre-baskerville-bold leading-[120px]">
            {painting?.year}
          </Text>
          <Text className="text-base text-gray-500 leading-8 font-libre-baskerville-bold -mt-10">
            {painting?.description}
          </Text>
          <Link
            // @ts-expect-error - painting.sourceUrl is a string
            href={painting?.sourceUrl!}
            className="text-sm text-gray-500 font-libre-baskerville-bold mt-12 mb-24 underline underline-offset-4"
          >
            {t("screens.painting.source_link")}
          </Link>
        </View>
      </ScrollView>
      <SafeAreaView
        edges={["bottom"]}
        className="sticky bottom-0 inset-x-0 px-6 py-4 border-t border-gray-200 flex-row justify-between items-center"
      >
        <View>
          <Text className="text-lg font-bold font-libre-baskerville-bold text-foreground mb-1">
            {painting?.name}
          </Text>
          <Text className="text-sm text-gray-500 font-libre-baskerville">
            {painting?.artist}
          </Text>
        </View>
        <CarouselArrows
          paintingId={Number(id)}
          paintingsCount={paintingsCount ?? 0}
        />
      </SafeAreaView>
    </View>
  );
}
