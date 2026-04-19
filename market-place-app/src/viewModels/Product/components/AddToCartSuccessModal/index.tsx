import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { Text, View } from "react-native";
import { colors } from "../../../../styles/colors";
import { AppButton } from "../../../../shared/components/AppButton";

interface AddToCartSuccessModalParams {
  productName: string;
  onGoToCart: () => void;
  onClose: () => void;
  onContinueShopping: () => void;
}

export const AddToCartSuccessModal: FC<AddToCartSuccessModalParams> = ({
  productName,
  onGoToCart,
  onClose,
  onContinueShopping,
}) => {
  return (
    <View className="bg-white rounded-xl p-6 w-full max-w-sm">
      <View className="items-center mb-4">
        <View className="w-16 h-16 bg-green-100 rounded-full items-center justify-center mb-3">
          <Ionicons name="checkmark" size={32} color={colors.success} />
        </View>

        <Text className="text-xl font-bold text-gray-900 text-center">
          Produto adicionado!
        </Text>
      </View>

      <Text className="text-gray-600 text-center mb-6">
        <Text className="font-semibold">{productName}</Text> Foi adicionado ao
        seu carrinho com sucesso!
      </Text>

      <View className="gap-6">
        <AppButton leftIcon="cart" onPress={onGoToCart}>
          Ver carrinho
        </AppButton>

        <AppButton onPress={onContinueShopping} variant="outlined">
          Continuar Comprando
        </AppButton>
      </View>
    </View>
  );
};
