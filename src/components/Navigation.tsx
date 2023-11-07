import { Button, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../themes/colors";

export const Navigation = () => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.logo}>tasktrack</Text>
      <Feather name="align-right" size={32} />
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: colors.primaryPurple,
    fontWeight: "bold",
    fontSize: 24,
  },
});
