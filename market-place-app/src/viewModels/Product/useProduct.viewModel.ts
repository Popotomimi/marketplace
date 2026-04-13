import { useGetCommentsInfiniteQuery } from "../../shared/queries/product/use-get-product-comments-infinite.query";
import { useGetProductDetailQuery } from "../../shared/queries/product/use-get-product-detail";

export const useProductViewModel = (productId: number) => {
  const {
    data: productDetails,
    isLoading,
    error,
  } = useGetProductDetailQuery(productId);

  const {
    comments,
    isLoading: getCommentsLoading,
    hasNextPage,
    fetchNextPage,
    refetch,
    error: getCommentsError,
    isRefetching,
    isFetchingNextPage,
  } = useGetCommentsInfiniteQuery(productId);

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const handleRefetch = () => {
    if (!isRefetching) {
      refetch();
    }
  };

  const handleEndReched = () => {
    handleLoadMore();
  };

  return {
    isLoading,
    productDetails,
    error,
    handleEndReched,
    handleRefetch,
    getCommentsLoading,
    getCommentsError,
    comments,
    isRefetching,
    isFetchingNextPage,
  };
};
