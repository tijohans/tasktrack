import { StyleSheet, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Navigation } from "../../src/components/Navigation";

export default function taskId() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <Navigation back={true} hamburger={false}></Navigation>
      <Text>Camera</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {},
  description: {},
});
