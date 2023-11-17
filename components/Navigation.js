import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import CustomLogoHeader from "./CustomLogoHeader";
import HomePage from "./HomePage";
import UserAccountButton from "./UserAccountButton";
import * as Colors from "../constants/colors";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => <CustomLogoHeader />,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.headerBackgroundColor,
          },
          headerTintColor: Colors.headerTintColor,
          headerTitleStyle: Colors.headerTitleStyle,
          headerRight: () => <UserAccountButton />,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Main Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
