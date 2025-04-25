import { render } from "@testing-library/react-native";
import { GalleriaLogo } from "./galleria-logo";

describe("GalleriaLogo", () => {
  const defaultProps = {
    width: 114,
    height: 32,
    color: "black",
  };

  it("renders correctly", () => {
    const { getByRole } = render(<GalleriaLogo {...defaultProps} />);
    const logo = getByRole("link");
    expect(logo).toBeDefined();
  });
});
