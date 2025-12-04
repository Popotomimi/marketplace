import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ButtonVariants, buttonVariants } from "./button.variants";
import { FC } from "react";
import { Ionicons } from "@expo/vector-icons";

interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  children: string;
}

export const AppButton: FC<AppButtonProps> = ({
  leftIcon,
  children,
  ...rest
}) => {
  const styles = buttonVariants();

  return (
    <TouchableOpacity className={styles.base()} {...rest}>
      <Text className={styles.text()}>{children}</Text>
    </TouchableOpacity>
  );
};
