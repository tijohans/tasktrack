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

  const navigateToTask = (id: string) => {
    console.log(id);
    router.push({ pathname: "/(task)/[id]", params: { id: id } });
  };

  return (
    <View
      onLayout={(e) => setLayout(e.nativeEvent.layout)}
      style={styles.container}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToTask(item.id)}>
            <Task
              taskName={item.name}
              taskDescription={item.description}
              width={layout.width}
              key={item.id}
            />
          </TouchableOpacity>
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
