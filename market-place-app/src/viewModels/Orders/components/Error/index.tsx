import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors } from "../../../../styles/colors";
import { AppButton } from "../../../../shared/components/AppButton";
import { router } from "expo-router";

export const Error = () => {
  return (
    <View className="flex-1 items-center justify-center px-6">
      <View className="w-10 h-10 bg-red-300 items-center justify-center rounded-full mb-6">
        <Ionicons name="alert" size={23} color={colors["danger"]} />
      </View>
      <View className="flex-row items-center justify-center">
        <Text className="text-xl text-danger font-bold">
          Falha ao carregar os pedidos!
        </Text>
      </View>

      <AppButton onPress={() => router.push("/home")} className="mt-6">
        Voltar para produtos
      </AppButton>
    </View>
  );
};
