import { Image, Text, TouchableOpacity, View } from "react-native";
import { CartProduct } from "../../../../shared/store/cart-store";
import { FC } from "react";
import { BuildImageUrl } from "../../../../shared/helpers/buildImageUrl";
import { AppPriceText } from "../../../../shared/components/AppPriceText";

interface ProductCartCard {
  product: CartProduct;
}

export const ProductCartCard: FC<ProductCartCard> = ({ product }) => {
  return (
    <View className="bg-white h-[71px] w-full flex-row items-center px-2 mb-2 rounded-lg">
      <Image
        source={{ uri: BuildImageUrl(product?.image ?? "") }}
        className="w-16 h-16 rounded-md mr-4"
        resizeMode="cover"
      />

      <View className="flex-1 mr-3">
        <Text className="text-sm font-normal text-gray-800 mb-1">
          {product.name}
        </Text>

        <AppPriceText
          classNameCurrency="text-sm font-bold"
          classNameValue="text-sm font-bold"
          value={Number(product.price)}
        />
      </View>

      <View className="flex-row items-center">
        <TouchableOpacity className="border-2 w-[18px] h-[18px] border-purple-base rounded-md items-center justify-center">
          <Text className="text-base font-medium text-purple-base text-center leading-none">
            -
          </Text>
        </TouchableOpacity>

        <View className="mx-2 items-center justify-center min-w-[24px] border-b border-b-gray-400">
          <Text className="text-base font-medium text-gray-700">
            {product.quantity}
          </Text>
        </View>

        <TouchableOpacity className="border-2 w-[18px] h-[18px] border-purple-base rounded-md items-center justify-center">
          <Text className="text-base font-medium text-purple-base text-center leading-none">
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
