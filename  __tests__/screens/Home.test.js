import React from "react";
import { render } from "@testing-library/react-native";
import Home from "../../screens/Home/Home";

describe("<Home />", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Home />);
    const textElement = getByText(
      "Open up App.js to start working on your app!"
    );
    expect(textElement).toBeTruthy();
  });
});
