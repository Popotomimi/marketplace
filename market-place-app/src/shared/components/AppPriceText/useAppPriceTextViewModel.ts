export const useAppPriceTextViewModel = (value: number) => {
  const formatPrice = () => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(value));
  };

  const formatedPrice = String(formatPrice());

  const parts = formatedPrice.split("\u00A0");
  const currencySymbol = parts[0];
  const valueText = parts.slice(1).join("\u00A0");

  return {
    formatedPrice,
    currencySymbol,
    valueText,
    value,
  };
};
