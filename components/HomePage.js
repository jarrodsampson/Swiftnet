import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import Billing from "../screens/Home/Billing";
import Upgrade from "../screens/Home/Upgrade";
import Services from "../screens/Home/Services";
import Support from "../screens/Home/Support";
import FABContainer from "./FABContainer";
import * as Colors from "../constants/colors";

const Tab = createBottomTabNavigator();

const HomePage = () => {
  const getTabBarIcon = (route, focused, color, size) => {
    let iconName;

    if (route.name === "HomeTab") {
      iconName = focused ? "home" : "home-outline";
    } else if (route.name === "Billing") {
      iconName = focused ? "card" : "card-outline";
    } else if (route.name === "Upgrade") {
      iconName = focused ? "newspaper" : "newspaper-outline";
    } else if (route.name === "Services") {
      iconName = focused ? "laptop" : "laptop-outline";
    } else if (route.name === "Support") {
      iconName = focused ? "help-buoy" : "help-buoy-outline";
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  };

  return (
    <View style={styles.tabContainer}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            getTabBarIcon(route, focused, color, size),
          tabBarInactiveTintColor: Colors.inactiveTintColor,
          tabBarActiveTintColor: Colors.activeTintColor,
          tabBarBadgeStyle: {
            backgroundColor: Colors.badgeBackgroundColor,
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
          options={{ headerShown: false }}
          name="Upgrade"
          component={Upgrade}
        />
        <Tab.Screen
          options={{ tabBarBadge: 1, headerShown: false }}
          name="Services"
          component={Services}
        />
        <Tab.Screen
          options={{ headerShown: false, title: "Support" }}
          name="Support"
          component={Support}
        />
      </Tab.Navigator>
      <FABContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
});

export default HomePage;
