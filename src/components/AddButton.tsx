import { Button, StyleSheet, Text, View } from "react-native";
import { colors } from "../../themes/colors";
import { FC } from "react";

interface addButtonProps {
  text: string;
  onPressAction?: any;
}

export const AddButton: FC<addButtonProps> = ({ text }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryPurple,
    width: 367,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
