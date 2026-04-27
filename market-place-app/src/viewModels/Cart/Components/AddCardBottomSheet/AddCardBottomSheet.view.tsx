import { FC } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAddCardBottomSheetViewModel } from "./useAddCardBottomSheet.viewModel";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/colors";
import { AppInput } from "../../../../shared/components/AppInput";
import { AppButton } from "../../../../shared/components/AppButton";

export const AddCardBotomSheetView: FC<
  ReturnType<typeof useAddCardBottomSheetViewModel>
> = () => {
  return (
    <ScrollView>
      <View className="p-8">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="font-bold text-2xl text-center text-gray-900">
            Adicionar Cartão
          </Text>
          <TouchableOpacity className="w-8 items-center justify-center border border-gray-400 rounded-[10px]">
            <Ionicons name="close" size={24} color={colors.grays[400]} />
          </TouchableOpacity>
        </View>

        <View className="mt-6 gap-4">
          <AppInput
            leftIcon="person-outline"
            label="NOME DO TITULAR"
            placeholder="Nome Completo"
          />

          <View className="flex-row gap-2">
            <View className="flex-1">
              <AppInput
                leftIcon="calendar-outline"
                label="VENCIMENTO"
                placeholder="MM/AA"
                keyboardType="numeric"
                maxLength={5}
              />
            </View>

            <View className="flex-1">
              <AppInput
                leftIcon="lock-closed-outline"
                label="CVV"
                placeholder="000"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        <View className="flex-row gap-4 pb-5 mt-8">
          <View className="flex-1">
            <AppButton variant="outlined">Cancelar</AppButton>
          </View>

          <View className="flex-1">
            <AppButton>Salvar</AppButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
