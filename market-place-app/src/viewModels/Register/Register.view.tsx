import { FC } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <AuthFormHeader
          title="Crie sua conta"
          subTitle="Informe os seus dados pessoais e de acesso"
        />
        <AppInputController
          leftIcon="person-outline"
          label="NOME"
          control={control}
          name="name"
          placeholder="Seu nome completo"
        />

        <AppInputController
          leftIcon="call-outline"
          label="TELEFONE"
          control={control}
          name="phone"
          placeholder="(00) 00000-0000"
        />

        <Text className="text-base mt-6 font-bold text-gray-600">Acesso</Text>

        <AppInputController
          leftIcon="mail-outline"
          label="E-MAIL"
          control={control}
          name="email"
          placeholder="mail@example.com.br"
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          label="SENHA"
          secureTextEntry
          control={control}
          name="password"
          placeholder="Sua senha"
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          label="CONFIRMAR SENHA"
          secureTextEntry
          control={control}
          name="confirmPassword"
          placeholder="Confirme sua senha"
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardContainer>
  );
};
