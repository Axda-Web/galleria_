import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GalleriaLogo } from "~/components/galleria-logo";
import { useTranslation } from "react-i18next";
import { useColorScheme } from "~/lib/useColorScheme";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { useRouter, usePathname } from "expo-router";
import { NAV } from "~/constants/nav";

export function Header() {
  const { t } = useTranslation();
  const { isDarkColorScheme } = useColorScheme();
  const [logoColor, setLogoColor] = useState("black");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLogoColor(isDarkColorScheme ? "white" : "black");
  }, [isDarkColorScheme]);

  const handlePress = () => {
    if (pathname !== NAV.HOME) {
      router.navigate("/");
    } else {
      router.navigate(`/painting/starry-night`);
    }
  };

  return (
    <SafeAreaView edges={["top"]} className="bg-background" testID="header">
      <View className="flex-row items-center justify-between p-6 border-b border-border">
        <GalleriaLogo width={114} height={32} color={logoColor} />
        <Button
          variant="ghost"
          testID="start-slideshow-button"
          onPress={handlePress}
        >
          <Text className="text-xs tracking-widest text-gray-500 font-bold font-libre-baskerville-bold">
            {pathname !== NAV.HOME
              ? t("screens.home.header.stop_slideshow")
              : t("screens.home.header.start_slideshow")}
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

// TODO: Find out why the pathname is not updated when the user navigates back to the home screen
