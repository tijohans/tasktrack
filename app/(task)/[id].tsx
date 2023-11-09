import { StyleSheet, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Navigation } from "../../src/components/Navigation";
import { useEffect, useState } from "react";
import { useTasks } from "../../src/hooks/useTasks";
import { useTask } from "../../src/hooks/useTask";

export default function taskId() {
  const { id } = useLocalSearchParams();
  const { task, taskLoading } = useTask(id as string);
  console.log(task);

  if (taskLoading) return <Text>Loading..</Text>;

  return (
    <>
      <Navigation back={true} />
      <View style={styles.container}>
        <Text style={styles.title}>{task?.name}</Text>
        {task?.description && (
          <Text style={styles.description}>{task?.description}</Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {},
  description: {},
});
