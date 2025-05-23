import { Card, CardDescription, CardTitle } from "~/components/ui/card";
import type { Painting, Image } from "~/drizzle-db/schema";
import { Image as ExpoImage, useImage } from "expo-image";
import { mapAssetUrl } from "~/lib/icons/mapAssetUrl";
import { View } from "react-native";
import { Skeleton } from "~/components/ui/skeleton";
import { Link } from "expo-router";
import { generatePaintingSlug } from "~/lib/generatePaintingSlug";

type PaintingCardProps = {
  painting: Painting & { images: Image[] };
};

export function PaintingCard({ painting }: PaintingCardProps) {
  const assetUri = mapAssetUrl(painting.images[0].url);
  const image = useImage(assetUri);

  if (image === null) {
    return <Skeleton className="aspect-square mb-6 w-full" />;
  }

  const imageAspectRatio = image?.width / image?.height;

  return (
    <Link
      testID="painting-card"
      href={`/painting/${generatePaintingSlug(painting.name)}?id=${
        painting.id
      }`}
      className="mb-6"
    >
      <Card className="relative w-full">
        <ExpoImage
          source={image}
          style={{
            aspectRatio: imageAspectRatio,
          }}
          contentFit="contain"
        />
        <View className="absolute inset-0 w-full h-full bg-black/50" />
        <View className="absolute bottom-0 left-0 p-8">
          <CardTitle className="text-white text-3xl font-bold">
            {painting.name}
          </CardTitle>
          <CardDescription className="text-base text-white/50">
            {painting.artist}
          </CardDescription>
        </View>
      </Card>
    </Link>
  );
}
