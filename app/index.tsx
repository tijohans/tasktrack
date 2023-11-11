import React, { useEffect } from "react";
import { useTasks } from "../src/hooks/useTasks";
import { Link, useLocalSearchParams } from "expo-router";
import { AddButton } from "../src/components/AddButton";
import { Tasks } from "../src/components/Tasks";
import { StyleSheet, View } from "react-native";

function index() {
  const { tasks, tasksLoading } = useTasks();

  return (
    <>
      {/* <Navigation /> */}
      {!tasksLoading && <Tasks data={tasks} />}

      <View style={styles.buttonContainer}>
        <Link href={"/completedTasks"}>
          <AddButton text={"view completed tasks"} />
        </Link>

        <Link href={"/createtask"}>
          <AddButton text={"add task"} />
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    gap: 20,
  },
});

export default index;
