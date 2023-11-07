import { Button, StyleSheet, Text, View } from "react-native";
import { Navigation } from "../components/Navigation";
import { Placeholder } from "../components/Placeholder";
import { AddButton } from "../components/AddButton";
import { SetStateAction, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Link } from "expo-router";

export const Landing = () => {
  const [tasks, setTasks] = useState<Array<string>>([]);

  const addTask = (newTask: string) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  return (
    <>
      <Navigation />
      <View style={styles.container}>
        {tasks ? (
          <FlatList data={tasks} renderItem={(task) => <Text>task</Text>} />
        ) : (
          <Placeholder />
        )}
      </View>
      <Link href={"/createtask"}>
        <AddButton />
      </Link>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "88%",
  },
});
