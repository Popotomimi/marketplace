import { useMutation, useQueryClient } from "@tanstack/react-query";
import { submitOrder } from "../../services/orders.service";
import { Toast } from "toastify-react-native";

export const useSubmitOrderMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["user-orders"] });
      console.log(response.message);
    },
    onError: (error) => {
      console.error(error);
      Toast.error(error.message ?? "Falha ao enviar o pedido", "top");
    },
  });

  return mutation;
};
