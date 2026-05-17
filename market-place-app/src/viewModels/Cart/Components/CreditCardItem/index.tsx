import { Text, TouchableOpacity, View } from "react-native";
import { CreditCard } from "../../../../shared/interfaces/credit-card";
import { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/colors";

interface CreditCardItemParams {
  creditCard: CreditCard;
}

export const CreditCardItem: FC<CreditCardItemParams> = ({ creditCard }) => {
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
          <Text className="text-base font-semibold">{creditCard.number}</Text>
          <Text className="text-sm text-gray-500 mt-1">
            Vencimento: {creditCard.expirationDate.toString()}
          </Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="pencil" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
