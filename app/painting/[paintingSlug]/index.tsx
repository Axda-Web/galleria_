import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { usePaintingDetails } from "~/hooks/queries/usePaintings";

import { mapAssetUrl } from "~/lib/icons/mapAssetUrl";
import { LocalImage } from "~/components/local-image";

export default function PaintingScreen() {
  const { id } = useLocalSearchParams();
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
    <View className="flex-1 p-6">
      <LocalImage uri={heroSmallURI} />
      <View className="p-4 -mt-16 bg-white max-w-80">
        <View className="p-2">
          <Text className="text-3xl font-bold">{painting?.name}</Text>
          <Text className="text-lg text-gray-500">{painting?.artist}</Text>
        </View>
        <LocalImage uri={artistURI} className="max-w-16 max-h-16 mt-4" />
      </View>
      <View className="-mt-8">
        <Text className="text-9xl text-right text-gray-500/10">
          {painting?.year}
        </Text>
        <Text className="text-base text-gray-500 font-bold">
          {painting?.description}
        </Text>
      </View>
    </View>
  );
}
