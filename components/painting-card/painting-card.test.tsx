import { render } from "@testing-library/react-native";
import { PaintingCard } from "./painting-card";

jest.mock("expo-image", () => ({
  Image: "View",
  ImageBackground: "View",
  useImage: () => null,
}));

const mockedPainting = {
  id: 1,
  name: "Starry Night",
  artist: "Vincent van Gogh",
  description: "A painting of a starry night",
  year: 1889,
  sourceUrl: "https://example.com/starry-night",
  createdAt: "2021-01-01",
  updatedAt: "2021-01-01",
  images: [
    {
      id: 1,
      url: "/assets/starry-night/thumbnail.jpg",
      createdAt: "2021-01-01",
      updatedAt: "2021-01-01",
      paintingId: 1,
      type: "thumbnail" as const,
    },
  ],
};

describe("PaintingCard", () => {
  it("should render", () => {
    const { getByTestId } = render(<PaintingCard painting={mockedPainting} />);

    expect(getByTestId("painting-card")).toBeOnTheScreen();
  });
});
