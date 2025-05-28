import { useColorScheme } from "~/lib/useColorScheme";
import { Button } from "~/components/ui/button";
import { Palette } from "~/lib/icons/Palette";

export function ThemeToggle() {
  const { isDarkColorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPress={toggleColorScheme}
      className="flex items-center justify-center rounded-full"
      variant="ghost"
      size="icon"
    >
      <Palette color="black" />
    </Button>
  );
}
