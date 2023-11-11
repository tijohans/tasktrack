import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../themes/colors";
import { router } from "expo-router";
import "react-native-get-random-values";
import { useTasks } from "../hooks/useTasks";
import { AddButton } from "./AddButton";
import { ErrorMessage } from "./ErrorMessage";

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
      <View style={styles.field}>
        <Text style={styles.label}>task name</Text>
        {errors?.taskName && <ErrorMessage text="task name is mandatory" />}
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
        {/* <Text style={styles.buttonText}>add task</Text> */}
        <AddButton text="add task" />
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
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 32,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
