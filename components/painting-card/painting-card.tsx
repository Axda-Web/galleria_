import { Card, CardDescription, CardTitle } from "~/components/ui/card";
import type { Painting, Image } from "~/drizzle-db/schema";
import { Image as ExpoImage, useImage } from "expo-image";
import { mapAssetUrl } from "~/lib/mapAssetUrl";
import { View } from "react-native";
import { Skeleton } from "~/components/ui/skeleton";
import { Link } from "expo-router";
import { generatePaintingSlug } from "~/lib/generatePaintingSlug";
import { LinearGradient } from "expo-linear-gradient";
import { cn } from "~/lib/utils";
import { useColorScheme } from "~/lib/useColorScheme";

type PaintingCardProps = {
  painting: Painting & { images: Image[] };
};

export function PaintingCard({ painting }: PaintingCardProps) {
  const { isDarkColorScheme } = useColorScheme();
  const assetUri = mapAssetUrl(painting.images[0].url);
  const image = useImage(assetUri);

  if (image === null) {
    return <Skeleton className="aspect-square mb-4 w-full" />;
  }

  const imageAspectRatio = image?.width / image?.height;

  return (
    <Link
      testID="painting-card"
      href={`/painting/${generatePaintingSlug(painting.name)}?id=${
        painting.id
      }`}
      className={cn("mb-4", {
        "border border-white/10": isDarkColorScheme,
      })}
    >
      <Card className="relative w-full">
        <ExpoImage
          source={image}
          style={{
            aspectRatio: imageAspectRatio,
          }}
          contentFit="contain"
        />
        {/* <View className="absolute inset-0 w-full h-full bg-black/50" /> */}
        <LinearGradient
          colors={["transparent", "black"]}
          locations={[0, 1]}
          style={{
            position: "absolute",
            inset: 0,
          }}
        />
        <View className="absolute bottom-0 left-0 p-8">
          <CardTitle className="text-white text-3xl font-libre-baskerville-bold">
            {painting.name}
          </CardTitle>
          <CardDescription className="text-base text-white/50 font-libre-baskerville">
            {painting.artist}
          </CardDescription>
        </View>
      </Card>
    </Link>
  );
}
