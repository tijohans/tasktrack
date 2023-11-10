import { router, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      <View
        style={{
          height: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Modal view</Text>
        <TouchableOpacity onPress={() => confirm()}>
          <Button title="confirm delete" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => decline()}>
          <Button title="decline delete" />
        </TouchableOpacity>
      </View>
    </>
  );
}
