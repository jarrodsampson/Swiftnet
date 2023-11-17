import { StyleSheet, Text, View } from "react-native";

const Upgrade = () => {
  return (
    <View style={styles.container}>
      <Text>Upgrade</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e6ed",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Upgrade;
