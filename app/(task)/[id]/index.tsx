import { StyleSheet, Text, View } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useTask } from "../../../src/hooks/useTask";
import { AddButton } from "../../../src/components/AddButton";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function taskId() {
  const { id } = useLocalSearchParams();
  const { task, taskLoading, deleteTask } = useTask(id as string);
  console.log(task);

  if (taskLoading) return <Text>Loading..</Text>;

  const navigateCreateTask = () => {
    router.push("/createtask");
  };

  const confirmDeleteTask = (id: string) => {
    router.push("/confirmModal");
    let confirm = false;
    if (confirm) {
      deleteTask(id as string);
      router.replace("/");
    }
  };

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

      <TouchableOpacity
        style={styles.link}
        onPress={() => navigateCreateTask()}
      >
        <AddButton text="add task" />
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
