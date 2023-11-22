import React from "react";
import { View, StyleSheet } from "react-native";
import { FAB } from "react-native-elements";
import * as Colors from "../constants/colors";

const FABContainer = () => {
  const fabPress = () => {
    alert("hi");
  };

  return (
    <View style={styles.fabContainer}>
      <FAB
        size="large"
        color={Colors.headerBackgroundColor}
        placement="right"
        // onPress={fabPress}
        icon={{ name: "forum", color: Colors.inactiveTintColor }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fabContainer: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    alignItems: "center",
  },
});

export default FABContainer;
