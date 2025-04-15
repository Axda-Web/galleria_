import type { Meta, StoryObj } from "@storybook/react";

import { GalleriaLogo } from "./galleria-logo";

const meta = {
  title: "SIMPLE COMPONENTS/GalleriaLogo",
  component: GalleriaLogo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GalleriaLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 114,
    height: 32,
  },
};
