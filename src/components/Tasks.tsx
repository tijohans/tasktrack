import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Task } from "./Task";
import { TaskType } from "../../types/taskType";
import { FC, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

interface TaskProps {
  data: Array<TaskType>;
}

export const Tasks: FC<TaskProps> = ({ data }) => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });

  return (
    <View
      onLayout={(e) => setLayout(e.nativeEvent.layout)}
      style={styles.container}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            taskName={item.name}
            taskDescription={item.description}
            width={layout.width}
            key={item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    height: "78%",
  },
});
