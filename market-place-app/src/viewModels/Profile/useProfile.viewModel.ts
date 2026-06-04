import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ProfileFormData, profileSchema } from "./profile.schema";
import { useState } from "react";
import { useUserStore } from "../../shared/store/user-store";

export const useProfileViewModel = () => {
  const { user } = useUserStore();
  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl || null,
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      newPassword: undefined,
      password: undefined,
    },
  });

  const onSubmit = handleSubmit(async () => {});

  return {
    control,
    handleSubmit,
    formState: { errors },
    onSubmit,
    avatarUri,
  };
};
