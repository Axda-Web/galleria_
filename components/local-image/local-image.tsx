import { Image, useImage } from "expo-image";
import { View } from "react-native";

type LocalImageProps = {
  uri: string;
  className?: string;
};

export function LocalImage({ uri, className }: LocalImageProps) {
  const imageData = useImage(uri);
  const imageAspectRatio = imageData?.width! / imageData?.height!;

  return (
    <View className={className}>
      <Image
        source={uri}
        style={{ aspectRatio: imageAspectRatio }}
        contentFit="contain"
      />
    </View>
  );
}
