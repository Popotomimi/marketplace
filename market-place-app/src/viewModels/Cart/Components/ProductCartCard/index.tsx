import { CartProduct } from "../../../../shared/store/cart-store";
import { FC } from "react";
import { ProductCartCardView } from "./ProductCartCard.view";
import { useProductCartCardViewModel } from "./useProductCartCard.view";

interface ProductCartCard {
  product: CartProduct;
}

export const ProductCartCard: FC<ProductCartCard> = ({ product }) => {
  const viewModel = useProductCartCardViewModel();

  return <ProductCartCardView product={product} {...viewModel} />;
};
