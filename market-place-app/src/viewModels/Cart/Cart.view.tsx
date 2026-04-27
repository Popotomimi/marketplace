import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useCartViewModel } from "./useCart.viewModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductCartCard } from "./Components/ProductCartCard";
import { EmptyList } from "./Components/EmptyList";
import { CartHeader } from "./Components/CartHeader";
import { CartFooter } from "./Components/CartFooter";

export const CartView: FC<ReturnType<typeof useCartViewModel>> = ({
  products,
}) => {
  return (
    <SafeAreaView>
      <FlatList
        contentContainerClassName="px-6"
        data={products}
        renderItem={({ item }) => <ProductCartCard product={item} />}
        keyExtractor={({ id }) => `product-cart-id=${id}`}
        ListEmptyComponent={<EmptyList />}
        ListHeaderComponent={<CartHeader />}
        ListFooterComponent={products.length > 0 ? <CartFooter /> : null}
      />
    </SafeAreaView>
  );
};
