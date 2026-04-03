import { useState } from "react";
import { useProductInfiniteQuery } from "../../shared/queries/product/use-product-infinite.query";
import { useFilterStore } from "../../shared/store/use-filter-store";
import { useDebounce } from "../../shared/hooks/useDebounce";

export const useHomeViewModel = () => {
  const { appliedFilterState } = useFilterStore();
  const [searchInputText, setSearchInputText] = useState("");
  const currentSearchText = useDebounce(searchInputText);

  const {
    products,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useProductInfiniteQuery({
    filters: { ...appliedFilterState, searchText: currentSearchText },
  });

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading) {
      fetchNextPage();
    }
  };

  const handleRefresh = async () => {
    await refetch();
  };

  const handleEndReached = () => {
    handleLoadMore();
  };

  return {
    handleLoadMore,
    handleRefresh,
    products,
    handleEndReached,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    setSearchInputText,
    searchInputText,
  };
};
