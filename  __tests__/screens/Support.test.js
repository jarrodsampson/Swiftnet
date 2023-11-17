import React from "react";
import { render } from "@testing-library/react-native";
import Support from "../../screens/Home/Support";

describe("<Support />", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Support />);
    const textElement = getByText("Support");
    expect(textElement).toBeTruthy();
  });
});
