import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppPriceText } from "../../../../shared/components/AppPriceText";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../styles/colors";
import { CreditCardItem } from "../CreditCardItem";
import { AppButton } from "../../../../shared/components/AppButton";
import { FC } from "react";
import { useCartFooterViewModel } from "./useCartFooter.viewModel";
import { CartFooterParams } from ".";

export const CartFooterView: FC<
  ReturnType<typeof useCartFooterViewModel> & CartFooterParams
> = ({
  creditCards,
  isLoadingCreditCards,
  openCartBottonSheet,
  total,
  selectedCreditCard,
  setSelectedCreditCard,
}) => {
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

        {isLoadingCreditCards ? (
          <View className="py-4 items-center">
            <ActivityIndicator size={"small"} color={colors["purple-base"]} />
            <Text className="text-gray-500 text-sm mt-2">
              Carregando Cartões...
            </Text>
          </View>
        ) : (
          <FlatList
            data={creditCards}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item: creditCard }) => (
              <CreditCardItem
                creditCard={creditCard}
                isSelected={creditCard.id === selectedCreditCard?.id}
                setSelectedCreditCard={setSelectedCreditCard}
              />
            )}
            className="gap-2"
          />
        )}

        <AppButton className="mt-4">Confirmar Compra</AppButton>
      </View>
    </View>
  );
};
