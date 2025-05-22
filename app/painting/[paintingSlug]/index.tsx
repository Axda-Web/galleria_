import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { usePaintingDetails } from "~/hooks/queries/usePaintings";
import { useTranslation } from "react-i18next";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { mapAssetUrl } from "~/lib/icons/mapAssetUrl";
import { LocalImage } from "~/components/local-image";

export default function PaintingScreen() {
  const { id } = useLocalSearchParams();
  const { t } = useTranslation();
  const { data: painting, isLoading, isError } = usePaintingDetails(Number(id));

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  const heroSmallURI = mapAssetUrl(painting?.images[1].url!);
  const artistURI = mapAssetUrl(painting?.images[4].url!);

  return (
    <View className="flex-1">
      <ScrollView className="flex-1 p-6">
        <LocalImage uri={heroSmallURI} />
        <View className="p-4 -mt-16 max-w-80 bg-background">
          <View className="p-2">
            <Text className="text-3xl font-bold font-libre-baskerville-bold text-foreground">
              {painting?.name}
            </Text>
            <Text className="text-lg text-gray-500 font-libre-baskerville">
              {painting?.artist}
            </Text>
          </View>
          <LocalImage uri={artistURI} className="max-w-16 max-h-16 mt-4" />
        </View>
        <View className="-mt-8">
          <Text className="text-9xl text-right text-gray-500/10 font-bold">
            {painting?.year}
          </Text>
          <Text className="text-base text-gray-500 font-bold leading-8 font-libre-baskerville-bold -translate-y-10">
            {painting?.description}
          </Text>
          <Link
            href={painting?.sourceUrl!}
            className="text-sm text-gray-500 font-libre-baskerville-bold my-12 underline underline-offset-4"
          >
            {t("screens.painting.source_link")}
          </Link>
        </View>
      </ScrollView>
      <SafeAreaView
        edges={["bottom"]}
        className="sticky bottom-0 inset-x-0 p-4 border-t border-gray-200"
      >
        <View className="p-2">
          <Text className="text-base font-bold font-libre-baskerville-bold text-foreground">
            {painting?.name}
          </Text>
          <Text className="text-xs text-gray-500 font-libre-baskerville">
            {painting?.artist}
          </Text>
        </View>
        <View></View>
      </SafeAreaView>
    </View>
  );
}
