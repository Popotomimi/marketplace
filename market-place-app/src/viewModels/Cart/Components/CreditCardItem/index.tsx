import { CreditCard } from "../../../../shared/interfaces/credit-card";
import { FC } from "react";
import { CreditCardItemView } from "./CreditCardItem.view";
import { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel";

interface CreditCardItemParams {
  creditCard: CreditCard;
  isSelected: boolean;
  setSelectedCreditCard: (creditCard: CreditCard) => void;
}

export const CreditCardItem: FC<CreditCardItemParams> = ({
  creditCard,
  isSelected,
  setSelectedCreditCard,
}) => {
  const viewModel = useCreditCardItemViewModel(creditCard);

  return (
    <CreditCardItemView
      {...viewModel}
      isSelected={isSelected}
      setSelectedCreditCard={setSelectedCreditCard}
    />
  );
};
