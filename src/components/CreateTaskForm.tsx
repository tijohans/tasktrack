import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../themes/colors";
import { router } from "expo-router";
import "react-native-get-random-values";
import { useTasks } from "../hooks/useTasks";
import { TaskType } from "../../types/taskType";

interface Errors {
  [key: string]: string;
}

export const CreatTaskForm = () => {
  const [taskName, setTaskName] = useState<string>();
  const [taskDescription, setTaskDescription] = useState<string>();
  const [errors, setErrors] = useState<Errors>();
  const { addTask } = useTasks();

  const validateForm = () => {
    let errors: Errors = {};

    if (!taskName) errors.taskName = "Task name is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return console.error("form not valid");

    let newTask = {
      name: taskName as string,
      description: taskDescription ? (taskDescription as string) : "",
    };

    addTask(newTask);

    router.replace("../");
  };

  return (
    <>
      <View style={styles.field}>
        <Text style={styles.label}>task name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTaskName(text)}
        ></TextInput>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>additional information</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTaskDescription(text)}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => handleSubmit()}
      >
        <Text style={styles.buttonText}>add task</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  field: {
    marginVertical: 10,
  },
  label: {
    fontSize: 32,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 2,
    height: 34,
  },

  buttonContainer: {
    backgroundColor: colors.primaryPurple,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 100,
    shadowRadius: 0,
    width: 367,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
