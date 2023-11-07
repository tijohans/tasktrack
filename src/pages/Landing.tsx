import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "../components/Navigation";

export const Landing = () => {
  return (
    <>
      <Navigation />
      <View style={styles.container}>
        <Text>Landing</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});
