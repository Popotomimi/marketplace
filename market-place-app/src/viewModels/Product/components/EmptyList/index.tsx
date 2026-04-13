import { FC } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { colors } from "../../../../styles/colors";

interface EmptyListParams {
  isLoadingComments: boolean;
}

export const EmptyList: FC<EmptyListParams> = ({ isLoadingComments }) => {
  if (isLoadingComments) {
    return (
      <View className="items-center py-8">
        <ActivityIndicator color={colors["purple-base"]} size={"small"} />
        <Text className="mt-2 text-gray-500">Carregando comentários...</Text>
      </View>
    );
  }

  return (
    <View className="py-8 items-center">
      <Text className="text-gray-500 text-base">
        Ainda não ha avaliações para este produto.
      </Text>
      <Text className="text-gray-400 text-sm mt-1">
        Seja o primeiro a avaliar!
      </Text>
    </View>
  );
};
