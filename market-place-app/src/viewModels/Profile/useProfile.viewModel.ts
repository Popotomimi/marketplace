import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProfileFormData, profileSchema } from "./profile.schema";
import { useState } from "react";
import { useUserStore } from "../../shared/store/user-store";
import { useUpdateProfileMutation } from "../../shared/queries/profile/use-update-profile.mutation";
import { useAppModal } from "../../shared/hooks/useAppModal";
import { useModalStore } from "../../shared/store/modal-store";
import { useCartStore } from "../../shared/store/cart-store";
import { useImage } from "../../shared/hooks/useImage";
import { CameraType } from "expo-image-picker";
import { useUploadAvatarMutation } from "../../shared/queries/auth/use-upload-avatar.mutation";

export const useProfileViewModel = () => {
  const { user, logout } = useUserStore();

  const updateProfileMutation = useUpdateProfileMutation();
  const { showSelection } = useAppModal();
  const { close } = useModalStore();
  const { clearCart } = useCartStore();

  const uploadAvatarMutation = useUploadAvatarMutation();

  const { handleSelectImage } = useImage({
    callback: async (url) => {
      if (url) {
        try {
          await uploadAvatarMutation.mutateAsync(url);
        } catch (error) {
          // O Toast já mostra a mensagem, mas evitamos rejection não tratado.
          console.error("Erro ao enviar avatar:", error);
        }
      }
    },
    cameraType: CameraType.front,
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      newPassword: undefined,
      password: undefined,
    },
  });

  const validatePasswords = (userData: ProfileFormData) => {
    if (!userData.password) return true;

    if (
      userData.password === userData.newPassword &&
      userData?.password?.length > 0
    ) {
      return false;
    }

    return true;
  };

  const onSubmit = handleSubmit(async (userData) => {
    if (!validatePasswords(userData)) return;

    await updateProfileMutation.mutateAsync(userData);
  });

  const handleLogout = () => {
    showSelection({
      title: "Sair",
      message: "Tem certeza que deseja sair da sua conta?",
      options: [
        {
          text: "Continuar Logado",
          onPress: close,
          variant: "secondary",
        },
        {
          variant: "danger",
          onPress: () => {
            clearCart();
            logout();
            close();
          },
          text: "Sair",
        },
      ],
    });
  };

  return {
    control,
    handleSubmit,
    formState: { errors },
    onSubmit,
    avatarUri: user?.avatarUrl,
    isSubmitting,
    handleLogout,
    handleSelectImage,
  };
};
