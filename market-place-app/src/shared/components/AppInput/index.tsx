import {
  Pressable,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { appInputVariants, AppInputVariantsProps } from "./input.variants";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { useAppInputViewModel } from "./useAppinputViewModel";

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
  label?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  containerClassName?: string;
  mask?: (value: string) => void | string;
  error?: string;
}

export const AppInput: FC<AppInputProps> = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  className,
  value,
  isError,
  secureTextEntry = false,
  onBlur,
  onFocus,
  onChangeText,
  mask,
  error,
  isDisabled,
  ...textInputProps
}) => {
  const {
    getIconColor,
    handleBlur,
    handleFocus,
    handlePasswordToggle,
    handleWrapperPres,
  } = useAppInputViewModel({
    error,
    onBlur,
    onFocus,
    isError: !!error,
    mask,
    onChangeText,
    isDisabled,
    secureTextEntry,
    value,
  });

  const styles = appInputVariants({});

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>Label</Text>
      <Pressable className={styles.wrapper()}>
        <Ionicons size={22} name="person" />

        <TextInput className={styles.input()} {...textInputProps} />

        <TouchableOpacity>
          <Ionicons size={22} name="eye-off-outline" />
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};
