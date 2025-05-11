import { Card, CardDescription, CardTitle } from "~/components/ui/card";
import type { Painting, Image } from "~/drizzle-db/schema";
import { Image as ExpoImage, useImage } from "expo-image";
import { mapAssetUrl } from "~/lib/icons/mapAssetUrl";
import { View } from "react-native";
import { Skeleton } from "~/components/ui/skeleton";

type PaintingCardProps = {
  painting: Painting & { images: Image[] };
};

export function PaintingCard({ painting }: PaintingCardProps) {
  const assetUri = mapAssetUrl(painting.images[0].url);
  const image = useImage(assetUri);

  if (image === null) {
    return <Skeleton className="aspect-square" />;
  }

  const imageAspectRatio = image?.width / image?.height;

  return (
    <Card className="w-full mb-6 relative">
      <ExpoImage
        onError={(err) => console.log("❌ image error: ", err)}
        source={image}
        style={{
          aspectRatio: imageAspectRatio,
        }}
        contentFit="contain"
      />
      <View className="absolute inset-0 w-full h-full bg-black/50" />
      <View className="absolute bottom-0 left-0 p-8">
        <CardTitle className="text-white text-2xl font-bold">
          {painting.name}
        </CardTitle>
        <CardDescription className="text-sm text-white/50">
          {painting.artist}
        </CardDescription>
      </View>
    </Card>
  );
}
