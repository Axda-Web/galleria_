import { View } from "react-native";
import { PaintingCard } from "~/components/painting-card";
import { FlashList } from "@shopify/flash-list";
import { useAllPaintings } from "~/hooks/queries/usePaintings";

export default function Index() {
  const { data: paintings } = useAllPaintings();

  return (
    <View className="flex-1 p-6">
      <FlashList
        data={paintings}
        renderItem={({ item }) => <PaintingCard painting={item} />}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={15}
      />
    </View>
  );
}
