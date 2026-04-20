import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useReviewBottomSheetViewModel } from "./useReviewBottomSheet.viewModel";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/colors";
import { AppInput } from "../../../../shared/components/AppInput";
import { AppButton } from "../../../../shared/components/AppButton";

export const ReviewBottomSheetView: FC<
  ReturnType<typeof useReviewBottomSheetViewModel>
> = ({}) => {
  return (
    <View className="bg-background rounded-t-2xl">
      <View className="flex-row items-center justify-between p-6">
        <Text className="text-lg font-bold text-gray-900">Avaliar produto</Text>

        <TouchableOpacity className="w-8 h-8 items-center justify-center rounded-[10px] border border-gray-400">
          <Ionicons size={24} name="close" color={colors.grays[400]} />
        </TouchableOpacity>
      </View>
      <View className="p-6">
        <Text className="font-semibold text-base text-gray-300">Nota</Text>

        <View className="flex-row items-center mb-6 gap-2">
          <Ionicons name="star-outline" size={32} color={colors.grays[400]} />
          <Ionicons name="star-outline" size={32} color={colors.grays[400]} />
          <Ionicons name="star-outline" size={32} color={colors.grays[400]} />
          <Ionicons name="star-outline" size={32} color={colors.grays[400]} />
          <Ionicons name="star-outline" size={32} color={colors.grays[400]} />
        </View>

        <AppInput
          label="COMENTÁRIO"
          placeholder="Descreva sua avaliação"
          value=""
          multiline
          numberOfLines={8}
          textAlign="left"
          containerClassName="mb-8"
          className="h-[150px]"
        />

        <View className="flex-row gap-3 mb-8">
          <View className="flex-1">
            <AppButton variant="outlined">Cancelar</AppButton>
          </View>
          <View className="flex-1">
            <AppButton>Enviar</AppButton>
          </View>
        </View>
      </View>
    </View>
  );
};
