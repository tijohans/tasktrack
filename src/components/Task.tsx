import React, { FC } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { colors } from "../../themes/colors";
import { Feather } from "@expo/vector-icons";

interface TaskProps {
  taskName: string;
  taskDescription?: string;
  width: number;
}

export const Task: FC<TaskProps> = ({ taskName, taskDescription, width }) => {
  return (
    <View style={[{ width: width }, styles.taskContainer]}>
      <Text style={styles.taskText}>{taskName}</Text>
      <Feather name="camera" size={32} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.secondaryBeige,
    borderBottomWidth: 5,
    marginBottom: 25,
    paddingBottom: 5,
  },
  taskText: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
