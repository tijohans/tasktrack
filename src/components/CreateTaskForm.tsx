import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../themes/colors";
import { router } from "expo-router";
import "react-native-get-random-values";
import { useTasks } from "../hooks/useTasks";
import { AddButton } from "./AddButton";
import { ErrorMessage } from "./ErrorMessage";
import { TextField } from "./TextField";

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
    if (!validateForm()) return;

    let newTask = {
      name: taskName as string,
      description: taskDescription ? (taskDescription as string) : "",
    };

    addTask(newTask);

    router.replace("../");
  };

  return (
    <>
      {errors?.taskName && <ErrorMessage text="task name is mandatory" />}
      <TextField label="task name" onChangeTextFunc={setTaskName} />

      <TextField
        label="additional information"
        onChangeTextFunc={setTaskDescription}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => handleSubmit()}
      >
        {/* <Text style={styles.buttonText}>add task</Text> */}
        <AddButton text="add task" />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primaryPurple,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 100,
    shadowRadius: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
