import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "../components/Navigation";
import { CreatTaskForm } from "../components/CreateTaskForm";

export const CreateTask = () => {
  return (
    <>
      <Navigation back={true} title="create new title" />
      <View style={styles.container}>
        <CreatTaskForm />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginVertical: 25,
  },
});
