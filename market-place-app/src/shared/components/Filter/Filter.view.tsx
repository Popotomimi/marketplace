import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useFilterViewModel } from "./useFilter.viewModel";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../styles/colors";
import { AppInput } from "../AppInput";
import { AppButton } from "../AppButton";
import CheckBox from "expo-checkbox";

export const FilterView: FC<ReturnType<typeof useFilterViewModel>> = ({
  productCategory,
  isLoading,
}) => {

  return (
    <View>
      <View className="flex-row items-center justify-between p-4 px-6">
        <Text className="text-lg font-bold text-gray-900">
          Filtrar anúncios
        </Text>

        <TouchableOpacity>
          <Ionicons name="close" size={20} color={colors["purple-base"]} />
        </TouchableOpacity>
      </View>

      <View className="p-4 px-6">
        <Text className="font-semibold text-base text-gray-500">VALOR</Text>
        <View className="flex-row mb-4 w-[100%]">
          <View className="flex-1">
            <AppInput
              placeholder="De"
              keyboardType="numeric"
              containerClassName="w-[90%]"
            />
          </View>
          <View className="flex-1">
            <AppInput
              placeholder="Para"
              keyboardType="numeric"
              containerClassName="w-[90%]"
            />
          </View>
        </View>
        <Text className="font-semibold text-base text-gray-500 mb-6">CATEGORIA</Text>

        {isLoading ? (
          <Text>Carregando...</Text>
        ) : (
          <View className="mb-6 gap-3">
            {productCategory?.map(({ name, id }) => (
              <TouchableOpacity className="flex-row items-center py-2" key={`product-category-${id}`}>
                <CheckBox color={colors["purple-base"]} className="mr-3 rounded-full" />
                <Text className="text-base text-gray-500">{name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="flex-row gap-3 mt-4 mb-6">
          <View className="flex-1">
            <AppButton variant="outlined">Limpar filtro</AppButton>
          </View>
          <View className="flex-1">
            <AppButton>Limpar filtro</AppButton>
          </View>
        </View>
      </View>
    </View>
  );
};
