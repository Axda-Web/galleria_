import {
  Theme,
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import "~/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState, useEffect, useLayoutEffect, Suspense } from "react";
import { Platform, View, Text } from "react-native";
import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import "~/i18n";
import { PortalHost } from "@rn-primitives/portal";
import * as Sentry from "@sentry/react-native";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "~/drizzle-db/migrations/migrations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { useReactQueryDevTools } from "@dev-plugins/react-query";

import { Header } from "~/components/header";
import { ThemeToggle } from "~/components/theme-toggle";
import { LocaleSelector } from "~/components/locale-selector";
import { db } from "~/drizzle-db";
import * as SQLite from "expo-sqlite";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { seed } from "~/drizzle-db/seed";

const actualDb = SQLite.openDatabaseSync("db.db");

Sentry.init({
  dsn: "https://41dfd60118dfabcbad53a624ae4d861f@o4508969201369088.ingest.de.sentry.io/4509255167443024",

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export { ErrorBoundary } from "expo-router";

const queryClient = new QueryClient();

export default Sentry.wrap(function RootLayout() {
  const hasMounted = useRef(false);
  const { isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);
  const { success, error } = useMigrations(db, migrations);

  useDrizzleStudio(actualDb);
  useReactQueryDevTools(queryClient);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    if (Platform.OS === "web") {
      // Adds the background color to the html element to prevent white background on overscroll.
      document.documentElement.classList.add("bg-background");
    }
    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  // useEffect(() => {
  //   seed();
  // }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }
  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
        <SafeAreaProvider>
          <Stack screenOptions={{ header: () => <Header /> }} />
          <ThemeToggle />
          <LocaleSelector />
          <PortalHost />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
});

const useIsomorphicLayoutEffect =
  Platform.OS === "web" && typeof window === "undefined"
    ? useEffect
    : useLayoutEffect;
