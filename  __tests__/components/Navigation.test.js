import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home/Home";
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

  it("handles user account button press", async () => {
    const logSpy = jest.spyOn(console, "log");

    const { getByTestId } = render(<Navigation />);

    await act(async () => {
      const userAccountButton = getByTestId("user-account-button");
      fireEvent.press(userAccountButton);
    });

    await waitFor(() => {
      expect(logSpy).toHaveBeenCalledWith("hi");
    });

    //expect(logSpy).toHaveBeenCalledWith("hi");

    // Clean up the mock
    logSpy.mockRestore();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
