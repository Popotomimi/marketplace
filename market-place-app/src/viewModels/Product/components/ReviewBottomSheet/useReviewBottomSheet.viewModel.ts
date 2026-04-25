import { useEffect, useState } from "react";
import { useGetUserCommentQuery } from "../../../../shared/queries/comments/use-get-user-comment.query";
import { useCreateCommentMutation } from "../../../../shared/queries/comments/use-create-comment.mutation";
import { useUpdateCommentMutation } from "../../../../shared/queries/comments/use-update-comment.mutation";
import { Toast } from "toastify-react-native";
import { useBottomSheetStore } from "../../../../shared/store/bottomsheet-store";

interface RatingFormInterface {
  content: string;
  rating: number;
  isEditing: boolean;
  commentId?: number;
}

const initialFormValue: RatingFormInterface = {
  content: "",
  rating: 0,
  isEditing: false,
  commentId: undefined,
};

export const useReviewBottomSheetViewModel = (productId: number) => {
  const [ratingForm, setRatingForm] = useState(initialFormValue);

  const { data: userComment, isLoading: loadingUserComment } =
    useGetUserCommentQuery(productId);

  const createCommentMutation = useCreateCommentMutation(productId);

  const updateCommentMutation = useUpdateCommentMutation(productId);

  const { close: closeBottomSheet } = useBottomSheetStore();

  const handleRatingChange = (rating: number) => {
    setRatingForm((prevData) => ({ ...prevData, rating }));
  };

  const handleContentChange = (content: string) => {
    setRatingForm((prevData) => ({ ...prevData, content }));
  };

  const handleFormSubmit = async () => {
    if (ratingForm.rating === 0) {
      Toast.warn("Por favor, selecione uma nota.", "top");
      return;
    }

    if (ratingForm.content.trim() === "") {
      Toast.warn("Por favor, escreva um comentário.", "top");
      return;
    }

    const { isEditing, ...formData } = ratingForm;

    if (isEditing) {
      updateCommentMutation.mutate({
        ...formData,
        commentId: formData.commentId!,
      });
    } else {
      createCommentMutation.mutate({
        content: formData.content,
        productId,
        rating: formData.rating,
      });
    }
    closeBottomSheet();
  };

  useEffect(() => {
    if (userComment && userComment.comment) {
      setRatingForm({
        content: userComment.comment.content,
        rating: userComment.rating,
        isEditing: true,
        commentId: userComment.comment.id,
      });
    } else {
      setRatingForm(initialFormValue);
    }
  }, [userComment]);

  const isLoading =
    createCommentMutation.isPending || updateCommentMutation.isPending;

  return {
    handleRatingChange,
    handleContentChange,
    ratingForm,
    loadingUserComment,
    handleFormSubmit,
    isLoading,
    closeBottomSheet,
  };
};
