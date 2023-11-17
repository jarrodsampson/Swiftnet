import React from "react";
import { render } from "@testing-library/react-native";
import Billing from "../../screens/Home/Billing";

describe("<Billing />", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Billing />);
    const textElement = getByText("Billing");
    expect(textElement).toBeTruthy();
  });
});
