import { Image, Text, View } from "react-native";
import { OrderInterface } from "../../../../shared/interfaces/order";
import { FC } from "react";
import { BuildImageUrl } from "../../../../shared/helpers/buildImageUrl";

interface OrderItemParams {
  order: OrderInterface;
}

export const OrderItem: FC<OrderItemParams> = ({ order }) => {
  return (
    <View className="flex-row items-center bg-white p-3 pl-0 mb-3 rounded-lg h-[89px]">
      <View className="p-1">
        <Image
          source={{ uri: BuildImageUrl(order.productPhoto) }}
          className="w-[88px] h-[80px] rounded-lg mr-4"
          resizeMode="cover"
        />
      </View>

      <View className="flex-1 justify-between py-4">
        <View className="flex-row justify-between items-start mb-2">
          <Text
            className="text-base font-semibold text-gray-900 flex-1 mr-2"
            numberOfLines={1}>
            {order.productName}
          </Text>

          <Text>{order.createdAt.toString()}</Text>
        </View>

        <Text>
          {order.quantity} - ${order.totalPrice.toFixed(2)}
        </Text>

        <Text>{order.creditCard.maskedNumber}</Text>
      </View>
    </View>
  );
};
