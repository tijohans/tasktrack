import {
  useFonts,
  AtkinsonHyperlegible_400Regular,
} from "@expo-google-fonts/atkinson-hyperlegible";
import { Stack, router } from "expo-router";
import { colors } from "../themes/colors";
import { appstyle } from "../themes/appstyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    AtkinsonHyperlegible_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: colors.primaryPurple,
          fontSize: 20,
        },
        contentStyle: appstyle,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "home",
          navigationBarHidden: true,
        }}
      />
      <Stack.Screen
        name="createtask"
        options={{ headerTitle: "create task", presentation: "modal" }}
      />
      <Stack.Screen
        name="(task)/[id]/index"
        options={{ headerTitle: "task" }}
      />
      <Stack.Screen name="confirmModal" options={{ presentation: "modal" }} />
      <Stack.Screen
        name="cameraModal"
        options={{ headerTitle: "", presentation: "modal", contentStyle: null }}
      />
      <Stack.Screen
        name="completedTasks"
        options={{ headerTitle: "completed tasks" }}
      />
    </Stack>
  );
}
