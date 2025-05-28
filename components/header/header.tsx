import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GalleriaLogo } from "~/components/galleria-logo";
import { useColorScheme } from "~/lib/useColorScheme";
import { usePathname } from "expo-router";
import { NAV } from "~/constants/nav";
import { LayoutPanelLeft } from "~/lib/icons/LayoutPanelLeft";
import { GalleryHorizontalEnd } from "~/lib/icons/GalleryHorizontalEnd";
import { Link } from "expo-router";

export function Header() {
  const { isDarkColorScheme } = useColorScheme();
  const pathname = usePathname();

  const linkPath = pathname !== NAV.HOME ? "/" : "/painting/starry-night?id=1";

  return (
    <SafeAreaView edges={["top"]} className="bg-background" testID="header">
      <View className="flex-row items-center justify-between p-6 border-b border-border">
        <GalleriaLogo
          width={114}
          height={32}
          color={isDarkColorScheme ? "white" : "black"}
        />
        <Link href={linkPath}>
          {pathname !== NAV.HOME ? (
            <LayoutPanelLeft
              color={isDarkColorScheme ? "white" : "black"}
              size={24}
            />
          ) : (
            <GalleryHorizontalEnd
              color={isDarkColorScheme ? "white" : "black"}
              size={24}
            />
          )}
        </Link>
      </View>
    </SafeAreaView>
  );
}

// TODO: Find out why the pathname is not updated when the user navigates back to the home screen
