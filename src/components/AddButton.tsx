import { Button, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../themes/colors";

export const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>add task</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryPurple,
    width: 367,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
