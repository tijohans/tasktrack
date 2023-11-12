import { Camera, CameraType } from "expo-camera";
import { useRef, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AddButton } from "../src/components/AddButton";
import { getLocalImgUri } from "../src/utils/savePhoto";
import { router, useLocalSearchParams } from "expo-router";
import { useTask } from "../src/hooks/useTask";

export default function cameraModal() {
  let cameraRef = useRef<any>();
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photo, setPhoto] = useState();
  const { id } = useLocalSearchParams();
  const { saveCompletedTask } = useTask(id);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePhoto = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  const completeTask = async () => {
    const imageLocation = await getLocalImgUri(id as string, photo.uri);
    saveCompletedTask(id, imageLocation);
    router.push("/");
  };

  if (photo) {
    return (
      <View style={styles.container}>
        <View style={styles.camera}>
          <Image
            style={[styles.preview]}
            source={{ uri: "data:image/jpg;base64," + photo?.base64 }}
          />
          <View style={[styles.buttonContainer, { flex: 0 }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setPhoto(undefined)}
            >
              <AddButton text="retake" red={true} />
            </TouchableOpacity>
          </View>
          <View style={[styles.buttonContainer, { flex: 0 }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => completeTask()}
            >
              <AddButton text="complete task" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <AddButton text="take picture" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 10,
    marginBottom: 30,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  preview: {
    flex: 1,
  },
});
