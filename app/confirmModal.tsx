import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AddButton } from "../src/components/AddButton";

export default function Modal() {
  const { id } = useLocalSearchParams();
  const confirm = () => {
    router.push({
      pathname: "../(task)/[id]?confirm=true",
      params: { id: id },
    });
  };

  const decline = () => {
    router.push({
      pathname: "../(task)/[id]",
    });
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>
          are you sure you want to delete this task?
        </Text>
        <TouchableOpacity onPress={() => confirm()}>
          <AddButton text="confirm delete" red={true} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => decline()}>
          <AddButton text="decline delete" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  buttonContainer: {
    gap: 20,
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
