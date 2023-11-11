import { FlatList, StyleSheet, View } from "react-native";
import { Task } from "./Task";
import { TaskType } from "../../types/taskType";
import { FC, useState } from "react";

interface TaskProps {
  data: Array<TaskType>;
  completed?: boolean;
}

export const Tasks: FC<TaskProps> = ({ data, completed }) => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });

  return (
    <View
      onLayout={(e) => setLayout(e.nativeEvent.layout)}
      style={[styles.container, { height: completed ? "90%" : "70%" }]}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Task
            id={item.id}
            taskName={item.name}
            taskDescription={item.description}
            image={item.imageURI}
            completed={item.completed}
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
  },
});
