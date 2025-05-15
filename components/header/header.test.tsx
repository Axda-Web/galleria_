import { render } from "@testing-library/react-native";
import { Header } from "./header";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock("expo-router", () => ({
  useRouter: () => ({
    navigate: jest.fn(),
  }),
  usePathname: () => "/",
}));

describe("Header", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText } = render(<Header />);
    expect(getByTestId("header")).toBeDefined();
    expect(getByText("screens.home.header.start_slideshow")).toBeDefined();
  });
});
