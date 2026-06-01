import { CreditCard } from "../../../../shared/interfaces/credit-card";
import { format } from "date-fns";

export const useCreditCardItemViewModel = (creditCard: CreditCard) => {
  const formatedExpirationDate = format(creditCard.expirationDate, "dd/yyyy");

  const formatedCardNumber = creditCard.number.slice(-4);

  return { creditCard, formatedExpirationDate, formatedCardNumber };
};
