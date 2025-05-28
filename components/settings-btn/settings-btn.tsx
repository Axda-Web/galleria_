import { View } from "react-native";
import { LocaleSelector } from "~/components/locale-selector";
import { ThemeToggle } from "~/components/theme-toggle";

export function SettingsBtn() {
  return (
    <View className="absolute top-3/4 right-6 flex flex-col gap-y-2 items-center bg-white rounded-full p-2 shadow-xl">
      <ThemeToggle />
      <LocaleSelector />
    </View>
  );
}
