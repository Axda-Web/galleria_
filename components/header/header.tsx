import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GalleriaLogo } from "~/components/galleria-logo";
import { useTranslation } from "react-i18next";
import { useColorScheme } from "~/lib/useColorScheme";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";

export function Header() {
  const { t } = useTranslation();
  const { isDarkColorScheme } = useColorScheme();
  const [logoColor, setLogoColor] = useState("black");

  useEffect(() => {
    setLogoColor(isDarkColorScheme ? "white" : "black");
  }, [isDarkColorScheme]);

  return (
    <SafeAreaView edges={["top"]} className="bg-background" testID="header">
      <View className="flex-row items-center justify-between p-6 border-b border-border">
        <GalleriaLogo width={114} height={32} color={logoColor} />
        <Button variant="ghost">
          <Text className="text-xs tracking-widest text-gray-500 font-bold font-libre-baskerville-bold">
            {t("screens.home.header.start_slideshow")}
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
