import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { Task } from "./Task";
import { TaskType } from "../../types/taskType";
import { FC, useState } from "react";

interface TaskProps {
  data: Array<TaskType>;
}

const screenDimensions = Dimensions.get("screen");

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
            taskName={item.taskName}
            taskDescription={item.taskDescription}
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
