import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRef } from "react";
import { useScrollToTop } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { supportTopics, additionalHelp, aboutList } from "../../data";

const Support = () => {
  const ref = useRef(null);

  useScrollToTop(
    useRef({
      scrollToTop: () => ref.current?.scrollTo({ y: 0 }),
    })
  );

  const RenderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>
          <Ionicons name={item.iconName} size={30} color="#FFFFFF" />
        </Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  // Group the items into rows of two
  const supportRows = [];
  for (let i = 0; i < supportTopics.length; i += 2) {
    const rowItems = supportTopics.slice(i, i + 2);
    supportRows.push(
      <View key={i / 2} style={styles.row}>
        {rowItems.map((item) => (
          <RenderItem key={item.id} item={item} />
        ))}
      </View>
    );
  }

  return (
    <ScrollView ref={ref} style={styles.container}>
      <View style={styles.spacingSmall}></View>
      <Text style={styles.title}>Support</Text>
      {supportRows}
      <View style={styles.spacing}></View>
      <Text style={styles.title}>Additional Help</Text>
      {additionalHelp.map((helpItem) => {
        return (
          <TouchableOpacity key={helpItem.id}>
            <Text style={styles.helpItem}>{helpItem.title}</Text>
          </TouchableOpacity>
        );
      })}
      <View style={styles.spacing}></View>
      <Text style={styles.title}>About</Text>
      {aboutList.map((aboutItem) => {
        return (
          <TouchableOpacity key={aboutItem.id}>
            <Text style={styles.helpItem}>{aboutItem.title}</Text>
          </TouchableOpacity>
        );
      })}
      <View style={styles.spacing}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e6ed",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "48%", // Adjust the width as needed
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    margin: 10,
  },
  iconContainer: {
    backgroundColor: "#001f3f",
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#fff",
    fontSize: 30,
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  helpItem: {
    backgroundColor: "#FFFFFF",
    borderBottomColor: "#cccccc",
    borderWidth: 1,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  spacing: {
    height: 50,
  },
  spacingSmall: {
    height: 25,
  },
});

export default Support;
