import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home/Home";

import Billing from "../screens/Home/Billing";
import Upgrade from "../screens/Home/Upgrade";
import Services from "../screens/Home/Services";
import Support from "../screens/Home/Support";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarStyle: {display: 'none'},
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HomeTab") {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Billing") {
            return (
              <Ionicons
                name={focused ? "card" : "card-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Upgrade") {
            return (
              <Ionicons
                name={focused ? "newspaper" : "newspaper-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Services") {
            return (
              <Ionicons
                name={focused ? "laptop" : "laptop-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Support") {
            return (
              <Ionicons
                name={focused ? "help-buoy" : "help-buoy-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: "#f8d7da",
        tabBarActiveTintColor: "#00796b",
        tabBarBadgeStyle: {
          backgroundColor: "#d5f5e3", // Set your desired background color
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false, title: "Home" }}
        name="HomeTab"
        component={Home}
      />
      <Tab.Screen
        options={{ tabBarBadge: 3, headerShown: false }}
        name="Billing"
        component={Billing}
      />
      <Tab.Screen
        name="Upgrade"
        options={{ headerShown: false }}
        component={Upgrade}
      />
      <Tab.Screen
        name="Services"
        options={{ tabBarBadge: 1, headerShown: false }}
        component={Services}
      />
      <Tab.Screen
        name="Support"
        options={{ headerShown: false, title: "Support" }}
        component={Support}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => {
            const userAccountPress = () => {
              console.log("hi");
            };
            return (
              <TouchableOpacity
                testID="user-account-button"
                onPress={userAccountPress}
              >
                <Ionicons name="person-outline" size={24} color="#00796b" />
              </TouchableOpacity>
            );
          },
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
