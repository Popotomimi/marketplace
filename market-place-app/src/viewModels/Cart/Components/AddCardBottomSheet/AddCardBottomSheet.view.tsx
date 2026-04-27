import { FC } from "react";
import { Text, View } from "react-native";
import { useAddCardBottomSheetViewModel } from "./useAddCardBottomSheet.viewModel";

export const AddCardBotomSheetView: FC<
  ReturnType<typeof useAddCardBottomSheetViewModel>
> = () => {
  return (
    <View>
      <Text>Adicionar Cartão</Text>
    </View>
  );
};
