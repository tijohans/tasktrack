import { FC } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  label: string;
  onChangeTextFunc: (value: string) => void;
}

export const TextField: FC<Props> = ({ label, onChangeTextFunc }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeTextFunc(text)}
      ></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
});
