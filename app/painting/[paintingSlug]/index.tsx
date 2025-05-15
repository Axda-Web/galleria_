import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PaintingScreen() {
  const { paintingSlug } = useLocalSearchParams();

  return (
    <View className="flex-1 p-6">
      <Text>{paintingSlug}</Text>
    </View>
  );
}
