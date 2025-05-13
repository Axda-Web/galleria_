import {
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { useTranslation } from "react-i18next";
import { LOCALES } from "~/i18n/constants";

export function LocaleSelector() {
  const insets = useSafeAreaInsets();
  const { t, i18n } = useTranslation();

  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  return (
    <SafeAreaView edges={["bottom"]} className="absolute bottom-4 right-4">
      <Select
        value={{
          label: t(`screens.home.locale_selector.options.${i18n.language}`),
          value: i18n.language,
        }}
        onValueChange={(value) => {
          i18n.changeLanguage(value?.value);
        }}
      >
        <SelectTrigger>
          <SelectValue
            className="text-foreground text-sm native:text-lg"
            placeholder={t(
              `screens.home.locale_selector.options.${i18n.language}`
            )}
          />
        </SelectTrigger>
        <SelectContent
          insets={{
            ...contentInsets,
            bottom: Math.max(contentInsets.bottom, 16),
          }}
        >
          {LOCALES.map((locale) => (
            <SelectItem
              key={locale}
              value={locale}
              label={t(`screens.home.locale_selector.options.${locale}`)}
            />
          ))}
        </SelectContent>
      </Select>
    </SafeAreaView>
  );
}

// TODO: Find out why the portal overflow the safe area view on android
