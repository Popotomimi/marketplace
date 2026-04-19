import { FC } from "react";
import { ReviewBottomSheetView } from "./ReviewBottomShet.view";
import { useReviewBottomSheetViewModel } from "./useReviewBottomSheet.viewModel";

interface ReviewBottomSheetParams {
  productId: number;
}

export const ReviewBottomSheet: FC<ReviewBottomSheetParams> = ({
  productId,
}) => {
  const viewModel = useReviewBottomSheetViewModel(productId);

  return <ReviewBottomSheetView {...viewModel} />;
};
