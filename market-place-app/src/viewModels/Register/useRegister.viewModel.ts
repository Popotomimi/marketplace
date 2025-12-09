import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../shared/queries/auth/use.register.mutation";
import { RegisterFormData, registerScheme } from "./register.schmea";
import { useUserStore } from "../../shared/store/user-store";
import { useAppModal } from "../../shared/hooks/useAppModal";
import { useCamera } from "../../shared/hooks/useCamera";
import { useGallery } from "../../shared/hooks/useGallery";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession, user } = useUserStore();
  const modals = useAppModal();
  const { openCamera } = useCamera({});
  const { openGallery } = useGallery({});

  const handleSelectAvatar = () => {
    modals.showSelection({
      title: "Selecionar foto",
      message: "Escolha uma opção",
      options: [
        {
          text: "Galeria",
          icon: "images",
          variant: "primary",
          onPres: openGallery,
        },
        {
          text: "Câmera",
          icon: "camera",
          variant: "primary",
          onPres: openCamera,
        },
      ],
    });
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
