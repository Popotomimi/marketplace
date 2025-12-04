import { Text, TouchableOpacity, View } from "react-native";
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

        <TouchableOpacity onPress={onSubmit}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text>Registro</Text>
        </TouchableOpacity>

        <AppButton>Teste</AppButton>
      </View>
    </KeyboardContainer>
  );
};
