import { useTranslation } from "react-i18next";
import { LOCALES } from "~/i18n/constants";
import { View } from "react-native";
import { Globe } from "~/lib/icons/Globe";
import { Button } from "~/components/ui/button";
import { MotiView, AnimatePresence } from "moti";
import { useState } from "react";
import { Text } from "~/components/ui/text";
import { useClickOutside } from "react-native-click-outside";

// TODO: Add scroll outside locale selector feature

export function LocaleSelector() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside<View>(() => setIsOpen(false));

  return (
    <View>
      {!isOpen && (
        <MotiView
          from={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 40 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            type: "timing",
            duration: 300,
          }}
        >
          <Button
            className="border border-white"
            variant="ghost"
            size="icon"
            onPress={() => setIsOpen(!isOpen)}
          >
            <Globe color="black" />
          </Button>
        </MotiView>
      )}

      <AnimatePresence>
        {isOpen && (
          <MotiView
            ref={ref}
            from={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 110,
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              type: "timing",
              duration: 300,
            }}
          >
            {LOCALES.map((locale, index) => (
              <MotiView
                key={locale}
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "timing",
                  duration: 300,
                  delay: 100 * index,
                }}
                exitTransition={{
                  type: "timing",
                  duration: 10,
                  delay: 0,
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onPress={() => {
                    i18n.changeLanguage(locale);
                    setIsOpen(false);
                  }}
                >
                  <Text className="text-gray-500 font-libre-baskerville-bold">
                    {t(`screens.home.locale_selector.options.${locale}`)}
                  </Text>
                </Button>
              </MotiView>
            ))}
          </MotiView>
        )}
      </AnimatePresence>
    </View>
  );
}

// TODO: Find out why the portal overflow the safe area view on android
