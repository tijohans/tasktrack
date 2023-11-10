import { Text, View } from "react-native";
import { Navigation } from "../src/components/Navigation";

export default function Modal() {
  return (
    <>
      {/* <Navigation back={true} /> */}
      <View
        style={{
          height: "76%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Modal view</Text>
      </View>
    </>
  );
}
