import React from "react";
import { View, StyleSheet } from "react-native";
import { CreatTaskForm } from "../src/components/CreateTaskForm";

export default function CreateTask() {
  return (
    <>
      {/* <Navigation back={true} title="create new title" /> */}
      <View style={styles.container}>
        <CreatTaskForm />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginVertical: 25,
  },
});
