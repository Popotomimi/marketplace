import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { colors } from "../../../../styles/colors";
import { FC } from "react";
import { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel";

export const CreditCardItemView: FC<
  ReturnType<typeof useCreditCardItemViewModel>
> = ({ creditCard, formatedExpirationDate, formatedCardNumber }) => {
  return (
    <TouchableOpacity className="p-4 rounded-lg border-[1px] bg-white border-gray-100">
      <View className="flex-row justify-between">
        <View className="mr-4">
          <Ionicons
            name="card-outline"
            size={24}
            color={colors["purple-base"]}
          />
        </View>

        <View className="flex-1">
          <Text className="text-base">Cartão final {formatedCardNumber}</Text>
          <Text className="text-sm text-gray-500 mt-1">
            {formatedExpirationDate}
          </Text>
        </View>

        <TouchableOpacity>
          <Ionicons color={colors["purple-base"]} size={18} name="pencil" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
