import { createElement } from "react";
import { useBottomSheetStore } from "../../shared/store/bottomsheet-store";
import { useCartStore } from "../../shared/store/cart-store";
import { AddcardBottomSheet } from "./Components/AddCardBottomSheet";

export const useCartViewModel = () => {
  const { products } = useCartStore();

  const { open: opneBottonSheet, close: closeBottomSheet } =
    useBottomSheetStore();

  const openCartBottonSheet = () => {
    opneBottonSheet({ content: createElement(AddcardBottomSheet) });
  };

  return { products, openCartBottonSheet, closeBottomSheet };
};
