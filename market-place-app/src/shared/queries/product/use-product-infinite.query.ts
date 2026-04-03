import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/product.service";
import { BuildImageUrl } from "../../helpers/buildImageUrl";
import { FilterState } from "../../store/use-filter-store";

interface productsInfiniteQueryParams {
  filters?: FilterState;
}

export const useProductInfiniteQuery = ({
  filters,
}: productsInfiniteQueryParams) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useInfiniteQuery({
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProducts({
          pagination: {
            page: pageParam,
            perPage: 10,
          },
          filters: {
            categoryIds: filters?.selectedCategories ?? [],
            searchText: filters?.searchText ?? undefined,
            minValue: filters?.valueMin ?? undefined,
            maxValue: filters?.valueMax ?? undefined,
          },
        });

        return response;
      } catch (error) {
        throw error;
      }
    },
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined;
    },
    initialPageParam: 1,
    queryKey: ["products", filters],
    staleTime: 1000 * 60 * 1,
  });

  const products = data?.pages
    .flatMap((page) => page.data)
    .map((product) => ({
      ...product,
      photo: BuildImageUrl(product.photo),
    }));

  return {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  };
};
