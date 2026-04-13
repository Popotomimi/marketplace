import { ActivityIndicator, Text, View } from "react-native";
import { colors } from "../../../../styles/colors";

export const Loading = () => {
  return (
    <View className="flex-1 bg-background">
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color={colors["purple-base"]} />
        <Text className="mt-4 text-base text-purple-base">
          Carregando produto...
        </Text>
      </View>
    </View>
  );
};
