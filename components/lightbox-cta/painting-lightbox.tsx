import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { Expand } from "~/lib/icons/Expand";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";

import { LocalImage } from "~/components/local-image";

type PaintingLightboxProps = {
  imageUri: string;
};

export function PaintingLightbox({ imageUri }: PaintingLightboxProps) {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute top-6 left-6 z-10 flex-row items-center gap-3.5 bg-black/70 rounded-none">
          <View>
            <Expand color="white" />
          </View>
          <Text className="font-libre-baskerville-bold text-white">
            {t("screens.painting.lightbox_cta")}
          </Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-96">
        <DialogClose asChild>
          <Button className="bg-transparent flex-row justify-end mb-2">
            <Text className="font-libre-baskerville-bold text-white">
              {t("screens.painting.lightbox.close_cta")}
            </Text>
          </Button>
        </DialogClose>
        <LocalImage uri={imageUri} />
      </DialogContent>
    </Dialog>
  );
}
