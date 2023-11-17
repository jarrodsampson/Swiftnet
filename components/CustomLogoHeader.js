import { Image, StyleSheet } from "react-native";

const CustomLogoHeader = () => {
  return (
    <Image
      source={require("../assets/logo/logo.png")}
      style={styles.logo}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 40,
  },
});

export default CustomLogoHeader;
