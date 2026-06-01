import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { colors } from "../../../../styles/colors";
import { FC } from "react";
import { AppButton } from "../../AppButton";

export interface SuccessModalParams {
  title: string;
  message?: string;
  buttonText?: string;
  onButtonPress?: () => void;
}

export const SuccessModal: FC<SuccessModalParams> = ({
  title,
  message,
  buttonText = "Fechar",
  onButtonPress,
}) => {
  return (
    <View className="bg-white rounded-2xl p-6 w-[85%] max-w-sm mx-auto">
      <View className="items-center">
        <View className="mb-4 w-16 h-16 bg-green-100 rounded-full items-center justify-center">
          <Ionicons name="checkmark-circle" color={colors.success} size={40} />
        </View>

        <Text className="text-xl font-bold text-gray-900 text-center mb-3">
          {title}
        </Text>

        <Text className="text-base text-gray-600 text-center mb-6 leading-6">
          {message}
        </Text>

        <AppButton onPress={onButtonPress}>{buttonText}</AppButton>
      </View>
    </View>
  );
};
