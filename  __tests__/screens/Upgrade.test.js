import React from "react";
import { render } from "@testing-library/react-native";
import Upgrade from "../../screens/Home/Upgrade";

describe("<Upgrade />", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Upgrade />);
    const textElement = getByText("Upgrade");
    expect(textElement).toBeTruthy();
  });
});
