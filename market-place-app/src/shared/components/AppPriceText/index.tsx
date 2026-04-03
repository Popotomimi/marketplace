import { FC } from "react";
import { AppPriceTextView } from "./AppPriceTextView";
import { useAppPriceTextViewModel } from "./useAppPriceTextViewModel";

interface AppPriceTextParams {
  classNameCurrency?: string;
  classNameValue?: string;
  value: number;
}

export const AppPriceText: FC<AppPriceTextParams> = ({
  value,
  classNameCurrency,
  classNameValue,
}) => {
  const viewModel = useAppPriceTextViewModel(value);

  return (
    <AppPriceTextView
      {...viewModel}
      classNameCurrency={classNameCurrency}
      classNameValue={classNameValue}
    />
  );
};
