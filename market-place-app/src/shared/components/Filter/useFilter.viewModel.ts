import { useGetProductCategoriesQuery } from "../../queries/product/use-get-product-category";

export const useFilterViewModel = () => {
  const {
    data: productsCategory,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery();

  return {
    productsCategory,
    isLoading,
  };
};
