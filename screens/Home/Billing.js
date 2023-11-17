import { StyleSheet, Text, View } from "react-native";

const Billing = () => {
  return (
    <View style={styles.container}>
      <Text>Billing</Text>
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

export default Billing;
