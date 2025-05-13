import { View, Text } from "react-native";
import { PaintingCard } from "~/components/painting-card";
import { FlashList } from "@shopify/flash-list";
import { useAllPaintings } from "~/hooks/queries/usePaintings";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { data: paintings, isLoading, isError } = useAllPaintings();
  const insets = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ paddingBottom: insets.bottom }} className="flex-1 p-6">
        <Text>⏳ Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{ paddingBottom: insets.bottom }} className="flex-1 p-6">
        <Text>❌ Error</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        paddingBottom: insets.bottom,
      }}
      className="flex-1 p-6"
    >
      <FlashList
        data={paintings}
        renderItem={({ item }) => <PaintingCard painting={item} />}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={15}
        ListEmptyComponent={<Text>No paintings found...</Text>}
      />
    </View>
  );
}
