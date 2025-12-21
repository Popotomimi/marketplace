import { useGetProductCategoriesQuery } from "../../queries/product/use-get-product-category";

export const useFilterViewModel = () => {
  const {
    data: productCategory,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery();

  return {
    productCategory,
    isLoading,
  };
};
