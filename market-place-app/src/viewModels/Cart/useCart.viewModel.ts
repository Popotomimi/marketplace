import { createElement } from "react";
import { useBottomSheetStore } from "../../shared/store/bottomsheet-store";
import { useCartStore } from "../../shared/store/cart-store";
import { AddcardBottomSheet } from "./Components/AddCardBottomSheet";
import { useGetCreditCardsQuery } from "../../shared/queries/credit-cards/use-get-credit-cards.query";

export const useCartViewModel = () => {
  const { products } = useCartStore();

  const { open: opneBottonSheet, close: closeBottomSheet } =
    useBottomSheetStore();

  const { data: creditCards = [], isLoading: isLoadingCreditCards } =
    useGetCreditCardsQuery();

  const openCartBottonSheet = () => {
    opneBottonSheet({ content: createElement(AddcardBottomSheet) });
  };

  return {
    products,
    openCartBottonSheet,
    closeBottomSheet,
    creditCards,
    isLoadingCreditCards,
  };
};
