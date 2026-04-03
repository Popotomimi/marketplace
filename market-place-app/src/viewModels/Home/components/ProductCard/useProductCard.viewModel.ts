import { ProductInterface } from "../../../../shared/interfaces/product";

interface UseProductCardViewModelParams {
  product: ProductInterface;
}

export const useProductCardViewModel = ({
  product,
}: UseProductCardViewModelParams) => {
  const FormatProductName = (name: string) => {
    if (name.length >= 17) {
      return `${name.slice(0, 17)}...`;
    }

    return name;
  };

  const formatRating = product.averageRating.toFixed(1).replace(",", ".");

  const displayName = FormatProductName(product.name);

  return { product, displayName, formatRating };
};
