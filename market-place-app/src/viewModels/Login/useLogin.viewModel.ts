import { useForm } from "react-hook-form";
import { LoginFormData, loginScheme } from "./login.schmea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "../../shared/queries/auth/use.login.mutation";
import { useUserStore } from "../../shared/store/user-store";

export const useLoginViewModel = () => {
  const { user } = useUserStore();

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useLoginMutation();

  const onSubmit = handleSubmit(async (userFormData) => {
    const userData = await loginMutation.mutateAsync(userFormData);
    console.log(userData);
  });

  return { control, onSubmit };
};
