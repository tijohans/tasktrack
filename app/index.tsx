import { Landing } from "../src/pages/Landing";
import {
  useFonts,
  AtkinsonHyperlegible_400Regular,
} from "@expo-google-fonts/atkinson-hyperlegible";
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    AtkinsonHyperlegible_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Landing />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "AtkinsonHyperlegible_400Regular",
    fontSize: 40,
    marginHorizontal: 25,
  },
});
