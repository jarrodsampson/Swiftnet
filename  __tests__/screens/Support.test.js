import React from "react";
import { render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Support from "../../screens/Home/Support";

// Mock the navigation context
const mockNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Support" component={Support} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

describe("<Support />", () => {
  it("renders correctly", () => {
    const { getByText } = render(mockNavigation());
    expect(getByText("Support")).toBeDefined();
    expect(getByText("Home Phone")).toBeDefined();

    expect(getByText("Additional Help")).toBeDefined();
    expect(getByText("Accessibility Support")).toBeDefined();

    expect(getByText("About")).toBeDefined();
    expect(getByText("View Policies")).toBeDefined();
  });
});
