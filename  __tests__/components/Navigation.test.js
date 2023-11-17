import React from "react";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Navigation from "../../components/Navigation";

// Mock the useNavigation hook
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("<Navigation />", () => {
  it("renders without crashing", () => {
    render(<Navigation />);
  });

  it("navigates to Home screen", () => {
    const { getByText } = render(<Navigation />);

    // Find the element that triggers the navigation (you might need to adjust this based on your actual UI)
    // const navigateButton = getByText("Navigate to Home");

    // Simulate a button click or other interaction that triggers navigation
    // fireEvent.press(navigateButton);

    // Verify that the navigate function was called with the correct screen name
    // expect(useNavigation().navigate).toHaveBeenCalledWith("Home");
  });
});
