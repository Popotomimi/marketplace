import { ActivityIndicator, Text, View } from "react-native";
import { colors } from "../../../../styles/colors";

export const Loading = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color={colors["purple-base"]} />
      <Text className="text-gray-600 mt-4">Carregando Pedidos...</Text>
    </View>
  );
};
