import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCommentRequest } from "../../interfaces/http/create-comment";
import { createComment } from "../../services/product.service";
import { Toast } from "toastify-react-native";

export const useCreateCommentMutation = (productId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (comment: CreateCommentRequest) => createComment(comment),
    onSuccess: (response) => {
      (queryClient.invalidateQueries({ queryKey: ["user-comment", productId] }),
        queryClient.invalidateQueries({
          queryKey: ["product-comments", productId],
        }));

      Toast.success(
        response.message || "Avaliação enviada com sucesso!",
        "top",
      );
    },
    onError: (error) => {
      Toast.error(
        error.message ||
          "Ocorreu um erro ao enviar a avaliação, tente novamente mais tarde",
        "top",
      );
    },
  });

  return mutation;
};
