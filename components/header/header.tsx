import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GalleriaLogo } from "~/components/galleria-logo";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();

  return (
    <SafeAreaView edges={["top"]} className="bg-background">
      <View className="flex-row items-center justify-between p-6 border-b border-border">
        <GalleriaLogo width={114} height={32} />
        <Text className="text-xs tracking-widest text-gray-500 font-bold font-libre-baskerville-bold">
          {t("screens.home.header.start_slideshow")}
        </Text>
      </View>
    </SafeAreaView>
  );
}
