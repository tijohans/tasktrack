import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../../themes/colors";
import { Navigation } from "../components/Navigation";

export const CreateTask = () => {
  return (
    <>
      <Navigation back={true} />
      <View style={styles.container}>
        <Text>Title</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryPurple,
  },
});
