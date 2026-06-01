import { CreditCard } from "../../../../shared/interfaces/credit-card";
import { FC } from "react";
import { CreditCardItemView } from "./CreditCardItem.view";
import { useCreditCardItemViewModel } from "./useCreditCardItem.viewModel";

interface CreditCardItemParams {
  creditCard: CreditCard;
}

export const CreditCardItem: FC<CreditCardItemParams> = ({ creditCard }) => {
  const viewModel = useCreditCardItemViewModel(creditCard);

  return <CreditCardItemView {...viewModel} />;
};
