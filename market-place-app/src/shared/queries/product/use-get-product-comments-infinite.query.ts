import { useInfiniteQuery } from "@tanstack/react-query";
import { use } from "react";
import { getProductComments } from "../../services/product.service";
import { BuildImageUrl } from "../../helpers/buildImageUrl";
import { ProductComment } from "../../interfaces/product-comment";
import { baseURL } from "../../api/market-place";

export const useGetCommentsInfiniteQuery = (productId: number) => {
  const query = useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) =>
      getProductComments({
        productId,
        pagination: {
          perPage: 20,
          page: pageParam,
        },
      }),
    queryKey: ["product-comments", productId],
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  const comments =
    (query.data?.pages
      .flatMap((page) => page.data)
      .map((comment) => ({
        ...comment,
        user: {
          ...comment.user,
          avatar: {
            url: comment.user.avatar?.url
              ? `${baseURL}${comment.user.avatar?.url ?? ""}`
              : undefined,
          },
        },
      })) as ProductComment[]) ?? [];

  return { ...query, comments };
};
