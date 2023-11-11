import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FC } from "react";
import { colors } from "../../themes/colors";

interface Props {
  text: string;
}

const ErrorMessage: FC<Props> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name="alert-circle" size={28} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 10,
    marginTop: 15,
  },
  icon: {
    color: colors.red,
  },
  text: {
    fontSize: 24,
    color: colors.red,
  },
});

export { ErrorMessage };
