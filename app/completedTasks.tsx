import { Text, View } from "react-native";
import { useTasks } from "../src/hooks/useTasks";
import { Tasks } from "../src/components/Tasks";

export default function completedTasks() {
  const { completedTasks, tasksLoading } = useTasks();

  if (tasksLoading) return <Text>loading…</Text>;
  return (
    <View>
      {!tasksLoading && <Tasks data={completedTasks} completed={true} />}
    </View>
  );
}
