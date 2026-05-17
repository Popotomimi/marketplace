import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCreditCardRequestParams } from "../../interfaces/http/create-credit-card";
import { createCreditCard } from "../../services/credit-card.service";
import { Toast } from "toastify-react-native";

export const useCreateCreditCardMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (creditCardData: CreateCreditCardRequestParams) =>
      createCreditCard(creditCardData),
    onSuccess: (response) => {
      Toast.success(response.message ?? "Cartão criado com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["credit-cards"],
      });
    },
  });

  return mutation;
};
