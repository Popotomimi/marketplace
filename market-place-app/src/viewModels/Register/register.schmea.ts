import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Nome é obrigatório")
    .min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve conter no mínimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password")], "Senhas não conferem"),
  phone: yup
    .string()
    .required("Telefone é obrigatório")
    .matches(/^\d(11)$/, "Telefone deve ter 11 digitos (DDD + número)"),
});
