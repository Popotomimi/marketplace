import { ImagePickerOptions } from "expo-image-picker";
import { useCallback, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Toast } from "toastify-react-native";

export const useGallery = (pickerOptions: ImagePickerOptions) => {
  const [loading, setLoading] = useState(false);

  const requestGalleryPremission = useCallback(async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      const currentStatus = status === "granted";

      if (!currentStatus) {
        Toast.error("Precisamos da permissão para acessar suas fotos", "top");
      }

      return currentStatus;
    } catch (error) {
      Toast.error("Erro ao solicitar permições da câmera", "top");
      return false;
    }
  }, []);

  const openGallery = useCallback(async (): Promise<string | null> => {
    setLoading(true);
    try {
      const hasPremission = await requestGalleryPremission();

      if (!hasPremission) return null;

      const result = await ImagePicker.launchImageLibraryAsync(pickerOptions);

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Toast.success("Foto selecionada com sucesso!", "top");
        return result.assets[0].uri;
      }

      return null;
    } catch (error) {
      Toast.error("Erro ao solicitar a foto", "top");
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    openGallery,
    loading,
  };
};
