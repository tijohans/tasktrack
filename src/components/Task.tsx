import React, { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../../themes/colors";
import { Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

interface TaskProps {
  id: string;
  taskName: string;
  taskDescription?: string;
  width: number;
  image: string;
  completed: 0 | 1;
}

export const Task: FC<TaskProps> = ({
  taskName,
  id,
  width,
  image,
  completed,
}) => {
  const navigateToTask = (id: string) => {
    router.push({ pathname: "/(task)/[id]", params: { id: id } });
  };

  const navigateToCamera = () => {
    router.push("cameraModal?id=" + id);
  };

  return (
    <View style={[{ width: width }, styles.taskContainer]}>
      <View>
        {completed == 1 && (
          <Image
            source={{ uri: image }}
            style={{ aspectRatio: 1, width: "100%", marginBottom: 15 }}
          />
        )}

        <TouchableOpacity onPress={() => navigateToTask(id)}>
          <Text style={styles.taskText}>{taskName}</Text>
        </TouchableOpacity>
      </View>

      {completed != 1 && (
        <TouchableOpacity onPress={() => navigateToCamera()}>
          <Feather name="camera" size={32} />
        </TouchableOpacity>
      )}
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
    maxWidth: 250,
  },
});
