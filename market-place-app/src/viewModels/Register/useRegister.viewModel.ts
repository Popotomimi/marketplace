import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../shared/queries/auth/use.register.mutation";
import { RegisterFormData, registerScheme } from "./register.schmea";
import { useUserStore } from "../../shared/store/user-store";
import { useImage } from "../../shared/hooks/useImage";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();
  const { handleSelectImage } = useImage({});

  const handleSelectAvatar = async () => {
    await handleSelectImage();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    console.log(userData);
    const { confirmPassword, ...registerData } = userData;

    const mutationResponse = await userRegisterMutation.mutateAsync(
      registerData
    );
    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      user: mutationResponse.user,
    });
  });

  return {
    control,
    errors,
    onSubmit,
    handleSelectAvatar,
  };
};
