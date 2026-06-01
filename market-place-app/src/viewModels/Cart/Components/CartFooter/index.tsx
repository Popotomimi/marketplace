import { FC } from "react";
import { CreditCard } from "../../../../shared/interfaces/credit-card";
import { CartFooterView } from "./CartFooter.view";
import { useCartFooterViewModel } from "./useCartFooter.viewModel";

export interface CartFooterParams {
  openCartBottonSheet: () => void;
  creditCards: CreditCard[];
  isLoadingCreditCards: boolean;
}

export const CartFooter: FC<CartFooterParams> = ({
  openCartBottonSheet,
  creditCards,
  isLoadingCreditCards,
}) => {
  const viewModel = useCartFooterViewModel();

  return (
    <CartFooterView
      creditCards={creditCards}
      isLoadingCreditCards={isLoadingCreditCards}
      openCartBottonSheet={openCartBottonSheet}
      {...viewModel}
    />
  );
};
