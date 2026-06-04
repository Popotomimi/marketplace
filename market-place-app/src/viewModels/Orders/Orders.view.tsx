import { FC } from "react";
import { FlatList, Text, View } from "react-native";
import { useOrdersViewModel } from "./useOrders.viewModel";
import { SafeAreaView } from "react-native-safe-area-context";
import { OrderItem } from "./components/OrderItem";
import { EmptyList } from "./components/EmptyList";
import { ListHeader } from "./components/ListHeader";
import { Error } from "./components/Error";
import { Loading } from "./components/Loading";

export const OrdersView: FC<ReturnType<typeof useOrdersViewModel>> = ({
  orders,
  error,
  isLoading,
}) => {
  if (isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <FlatList
        contentContainerClassName="px-[16px] pb-[120px]"
        data={orders}
        renderItem={({ item: order }) => <OrderItem order={order} />}
        keyExtractor={({ id }) => `order-${id}`}
        ListEmptyComponent={<EmptyList />}
        ListHeaderComponent={<ListHeader />}
      />
    </SafeAreaView>
  );
};
