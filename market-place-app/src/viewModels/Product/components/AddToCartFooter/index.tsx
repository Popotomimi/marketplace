import { View } from "react-native";
import { ProductInterface } from "../../../../shared/interfaces/product";
import { FC } from "react";
import { AppPriceText } from "../../../../shared/components/AppPriceText";
import { AppButton } from "../../../../shared/components/AppButton";

interface AddToCartFooterParams {
  product: ProductInterface;
}

export const AddToCartFooter: FC<AddToCartFooterParams> = ({ product }) => {
  return (
    <View className="fixed justify-between bg-white bottom-0 left-0 p-7 h-[126px] flex-row items-center">
      <AppPriceText value={Number(product.value)} />

      <AppButton leftIcon="cart" className="w-[120px] h-[40px]">
        Adicionar
      </AppButton>
    </View>
  );
};
