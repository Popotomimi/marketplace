import { Text, View } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { FC } from "react";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AppButton } from "../../shared/components/AppButton";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="items-center justify-center flex-1 px-[40px]">
        <View className="flex-1 w-full items-center justify-center">
          <AuthFormHeader
            title="Acesse sua conta"
            subTitle="Informe seu e-mail e senha para entrar"
          />

          <AppInputController
            control={control}
            name="email"
            leftIcon="mail-outline"
            label="E-MAIL"
            placeholder="mail@example.com.br"
          />

          <AppInputController
            control={control}
            name="password"
            leftIcon="lock-closed-outline"
            label="SENHA"
            secureTextEntry
            placeholder="Sua senha"
          />

          <AppButton
            onPress={onSubmit}
            className="mt-6"
            rightIcon="arrow-forward">
            login
          </AppButton>
        </View>

        <View className="flex-2 pb-16">
          <Text className="text-base mb-6 text-gray-500">
            Ainda não tem uma conta?
          </Text>

          <AppButton
            onPress={() => router.push("(public)/register")}
            variant="outlined"
            rightIcon="arrow-forward">
            Registro
          </AppButton>
        </View>
      </View>
    </KeyboardContainer>
  );
};
