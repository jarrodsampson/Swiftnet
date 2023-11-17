import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Colors from "../constants/colors";

const UserAccountButton = () => {
  const userAccountPress = () => {
    console.log("hi");
  };

  return (
    <TouchableOpacity testID="user-account-button" onPress={userAccountPress}>
      <Ionicons
        name="person-outline"
        size={24}
        color={Colors.inactiveTintColor}
      />
    </TouchableOpacity>
  );
};

export default UserAccountButton;
