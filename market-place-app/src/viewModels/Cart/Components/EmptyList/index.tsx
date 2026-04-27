import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../../styles/colors";
import { AppButton } from "../../../../shared/components/AppButton";
import { router } from "expo-router";

export const EmptyList = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center px-20 pt-16">
        <Ionicons name="cart-outline" color={colors.grays[200]} size={80} />

        <Text className="text-xl font-bold text-gray-700 mt-4 mb-4">
          Seu carrinho está vazio
        </Text>

        <Text className="text-base text-gray-400 text-center mb-8">
          Explore p catálogo de produtos e faça sua primeira compra!
        </Text>
      </View>
      <AppButton
        onPress={() => router.push("/home")}
        leftIcon="storefront-outline"
        variant="outlined"
        className="w-[197px] self-center">
        Explorar produtos
      </AppButton>
    </SafeAreaView>
  );
};
