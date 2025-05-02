import { Text, View } from "react-native";
import { Button } from "~/components/ui/button";
import { LocaleSelector } from "~/components/locale-selector";
import * as Sentry from "@sentry/react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500">
        Edit app/index.tsx to edit this screen.
        <Button
          // title="Try!"
          onPress={() => {
            Sentry.captureException(new Error("First error"));
          }}
        />
      </Text>
      <LocaleSelector />
    </View>
  );
}
