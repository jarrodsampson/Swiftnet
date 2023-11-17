import React from "react";
import { render } from "@testing-library/react-native";
import Services from "../../screens/Home/Services";

describe("<Services />", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Services />);
    const textElement = getByText("Services");
    expect(textElement).toBeTruthy();
  });
});
