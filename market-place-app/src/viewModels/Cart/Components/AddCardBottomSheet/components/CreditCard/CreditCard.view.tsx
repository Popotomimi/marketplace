import { FC } from "react";
import { View } from "react-native";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";
import { FocusedField } from "../../useAddCardBottomSheet.viewModel";

export const CreditCardView: FC<
  ReturnType<typeof useCreditCardViewModel> & {
    focusedField: FocusedField | null;
  }
> = ({}) => {
  return <View className="h-[192px]"></View>;
};
