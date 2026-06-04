import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../../styles/colors";
import { router } from "expo-router";
import { useUserStore } from "../../../../shared/store/user-store";

export const Header = () => {
  const { logout } = useUserStore();

  return (
    <View className="flex-row justify-between items-center py-3 border-shape">
      <TouchableOpacity
        onPress={router.back}
        className="flex-row items-center gap-1">
        <Ionicons name="arrow-back" size={24} color={colors["purple-base"]} />
        <Text className="text-purple-base text-base">Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={logout}
        className="flex-row items-center gap-1">
        <Ionicons name="log-out-outline" size={20} color={colors.danger} />
        <Text className="text-danger text-base">Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
