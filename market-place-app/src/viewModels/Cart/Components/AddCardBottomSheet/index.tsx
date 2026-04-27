import { AddCardBotomSheetView } from "./AddCardBottomSheet.view";
import { useAddCardBottomSheetViewModel } from "./useAddCardBottomSheet.viewModel";

export const AddcardBottomSheet = () => {
  const viewModel = useAddCardBottomSheetViewModel();

  return <AddCardBotomSheetView {...viewModel} />;
};
