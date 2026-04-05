import { useGetProductDetailQuery } from "../../shared/queries/product/use-get-product-detail";

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetails,
    isLoading,
    error,
  } = useGetProductDetailQuery(productId);

  return {
    productDetails,
    isLoading,
    error,
  };
};
