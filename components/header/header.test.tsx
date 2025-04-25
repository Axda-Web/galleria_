import { render } from "@testing-library/react-native";
import { Header } from "./header";

describe("Header", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText } = render(<Header />);
    expect(getByTestId("header")).toBeDefined();
    expect(getByText("screens.home.header.start_slideshow")).toBeDefined();
  });
});
