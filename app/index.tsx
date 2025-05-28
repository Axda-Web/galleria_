import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { FlashList } from "@shopify/flash-list";
import { useAllPaintings } from "~/hooks/queries/usePaintings";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Skeleton } from "~/components/ui/skeleton";

import { PaintingCard } from "~/components/painting-card";

export default function Index() {
  const { data: paintings, isLoading, isError } = useAllPaintings();
  const insets = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ paddingBottom: insets.bottom }} className="flex-1 p-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="h-80 w-full mb-6" />
        ))}
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
      className="flex-1 p-4"
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
