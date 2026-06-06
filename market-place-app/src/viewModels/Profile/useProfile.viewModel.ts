import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProfileFormData, profileSchema } from "./profile.schema";
import { useState } from "react";
import { useUserStore } from "../../shared/store/user-store";
import { useUpdateProfileMutation } from "../../shared/queries/profile/use-update-profile.mutation";
import { useAppModal } from "../../shared/hooks/useAppModal";
import { useModalStore } from "../../shared/store/modal-store";
import { useCartStore } from "../../shared/store/cart-store";

export const useProfileViewModel = () => {
  const { user, logout } = useUserStore();
  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl || null,
  );

  const updateProfileMutation = useUpdateProfileMutation();
  const { showSelection } = useAppModal();
  const { close } = useModalStore();
  const { clearCart } = useCartStore();

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
    avatarUri,
    isSubmitting,
    handleLogout,
  };
};
