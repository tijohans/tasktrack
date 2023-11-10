import { StyleSheet, Text, View } from "react-native";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useTask } from "../../../src/hooks/useTask";
import { AddButton } from "../../../src/components/AddButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useEffect } from "react";

export default function taskId() {
  const { id } = useLocalSearchParams();
  const { task, taskLoading, deleteTask } = useTask(id as string);
  const { confirm } = useLocalSearchParams();

  const confirmDeleteTask = (id: string) => {
    router.push(`/confirmModal?id=${id}`);
  };

  useEffect(() => {
    if (confirm && id) {
      deleteTask(id as string);
      router.replace("../");
    }
  }, [confirm]);

  return (
    <>
      {/* <Navigation back={true} title="task" /> */}
      <View style={styles.container}>
        <Text style={styles.title}>{task?.name}</Text>
        {task?.description && (
          <Text style={styles.description}>{task?.description}</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.link}
        onPress={() => confirmDeleteTask(id)}
      >
        <AddButton text="delete task" red={true} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    marginTop: 30,
    fontSize: 20,
  },
  link: {
    marginVertical: 15,
  },
});
