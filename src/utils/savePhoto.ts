import * as FileSystem from "expo-file-system";

const imgDir = FileSystem.documentDirectory + "images/";

const ensureDirExists = async () => {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);

  if (!dirInfo.exists) {
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
};

const savePhotoToFileSystem = async (uri: string, filename: string) => {
  await ensureDirExists();

  const fileName = filename + ".jpg";
  const fileLocation = imgDir + fileName;

  await FileSystem.copyAsync({ from: uri, to: fileLocation });

  return fileLocation;
};

export const getLocalImgUri = async (id: string, photoUri: string) => {
  const location = await savePhotoToFileSystem(photoUri, id);
  return location;
};
