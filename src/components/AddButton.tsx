import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../themes/colors";
import { FC } from "react";

interface addButtonProps {
  text: string;
  red?: boolean;
}

export const AddButton: FC<addButtonProps> = ({ text, red }) => {
  return (
    <View style={[styles.container, red && styles.redBg]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryPurple,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 100,
    shadowRadius: 0,
    width: 367,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  redBg: {
    backgroundColor: colors.red,
  },
});
