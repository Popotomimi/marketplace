import * as yup from "yup";

export const profileSchema: yup.ObjectSchema<{
  name: string;
  email: string;
  phone: string;
  password?: string;
  newPassword?: string;
}> = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("E-mail é obrigatório").email("E-mail inválido"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^\d{11}$/, "Telefone deve ter 11 dígitos (DDD + número)"),
  password: yup.string().optional(),
  newPassword: yup.string().optional(),
});

export type ProfileFormData = yup.InferType<typeof profileSchema>;
