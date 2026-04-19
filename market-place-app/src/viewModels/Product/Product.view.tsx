import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useProductViewModel } from "./useProduct.viewModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components/Header";
import { CommentItem } from "./components/CommentItem";
import { ListFooter } from "./components/ListFooter";
import { EmptyList } from "./components/EmptyList";
import { Loading } from "./components/Loading";
import { Error } from "./components/Erro";
import { AddToCartFooter } from "./components/AddToCartFooter";

export const ProductView: FC<ReturnType<typeof useProductViewModel>> = ({
  error,
  isLoading,
  productDetails,
  getCommentsError,
  getCommentsLoading,
  handleEndReched,
  handleRefetch,
  comments,
  isRefetching,
  isFetchingNextPage,
  handleAddToCart,
  handleOpenReview,
}) => {
  if (error) {
    return <Error />;
  }

  if (isLoading || !productDetails) {
    return <Loading />;
  }

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background">
      <FlatList
        data={comments}
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListHeaderComponent={
          <Header
            handleOpenReview={handleOpenReview}
            productDetails={productDetails}
          />
        }
        className="px-6"
        onEndReached={handleEndReched}
        onRefresh={handleRefetch}
        refreshing={isRefetching}
        ListFooterComponent={<ListFooter isloadingMore={isFetchingNextPage} />}
        ListEmptyComponent={
          <EmptyList isLoadingComments={getCommentsLoading} />
        }
        contentContainerClassName="pb-6"
      />
      <AddToCartFooter
        product={productDetails}
        handleAddToCart={handleAddToCart}
      />
    </SafeAreaView>
  );
};
