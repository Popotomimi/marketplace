import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateCommentRequest } from "../../interfaces/http/update-comment";
import { updateComment } from "../../services/product.service";
import { Toast } from "toastify-react-native";

export const useUpdateCommentMutation = (productId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (comment: UpdateCommentRequest) => updateComment(comment),
    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ["user-comment", productId],
      });
      queryClient.invalidateQueries({
        queryKey: ["product-comments", productId],
      });

      Toast.success(
        response.message || "Avaliação atualizada com sucesso!",
        "top",
      );
    },
    onError: (error) => {
      Toast.error(
        error.message ||
          "Ocorreu um erro ao atualizar a avaliação, tente novamente mais tarde",
        "top",
      );
    },
  });

  return mutation;
};
