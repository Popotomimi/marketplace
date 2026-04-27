import { Text, TouchableOpacity, View } from "react-native";
import { AppPriceText } from "../../../../shared/components/AppPriceText";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/colors";
import { AppButton } from "../../../../shared/components/AppButton";
import { useCartStore } from "../../../../shared/store/cart-store";
import { FC } from "react";

interface CartFooterParams {
  openCartBottonSheet: () => void;
  closeBottomSheet: () => void;
}

export const CartFooter: FC<CartFooterParams> = ({
  openCartBottonSheet,
  closeBottomSheet,
}) => {
  const { total } = useCartStore();

  return (
    <View className="bg-white p-4 rounded-lg mt-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-xs font-semibold text-gray-600">VALOR TOTAL</Text>
        <AppPriceText
          value={total}
          classNameCurrency="text-base text-gray-900 font-bold"
          classNameValue="text-base text-gray-900 font-bold"
        />
      </View>

      <View className="mb-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xs font-semibold text-gray-600">
            CARTÕES DE CRÉDITO
          </Text>

          <TouchableOpacity
            onPress={openCartBottonSheet}
            className="flex-row items-center">
            <Ionicons
              name="card-outline"
              size={20}
              color={colors["purple-base"]}
            />
            <Text className="text-purple-base ml-2 text-sm font-bold">
              Adicionar cartão
            </Text>
          </TouchableOpacity>
        </View>

        <AppButton className="mt-4">Confirmar Compra</AppButton>
      </View>
    </View>
  );
};
