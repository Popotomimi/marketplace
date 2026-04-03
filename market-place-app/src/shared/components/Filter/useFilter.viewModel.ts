import { useGetProductCategoriesQuery } from "../../queries/product/use-get-product-category";
import { useBottomSheetStore } from "../../store/bottomsheet-store";
import { useFilterStore } from "../../store/use-filter-store";

export const useFilterViewModel = () => {
  const { data: productCategory, isLoading } = useGetProductCategoriesQuery();

  const {
    updateFilter,
    filterState,
    applyFilters,
    appliedFilterState,
    resetFilter,
  } = useFilterStore();
  const { close } = useBottomSheetStore();

  const handleValueMaxChange = (value: number) => {
    updateFilter({ key: "valueMax", value });
  };

  const handleValueMinChange = (value: number) => {
    updateFilter({ key: "valueMin", value });
  };

  const handleCategoryToglle = (categoryId: number) => {
    const categoryAlreadyArray =
      filterState.selectedCategories.includes(categoryId);

    if (categoryAlreadyArray) {
      updateFilter({
        key: "selectedCategories",
        value: filterState.selectedCategories.filter((id) => id !== categoryId),
      });
    } else {
      updateFilter({
        key: "selectedCategories",
        value: [...filterState.selectedCategories, categoryId],
      });
    }
  };

  const handleApplyFilters = () => {
    applyFilters();
    close();
  };

  const handleResetFilter = () => {
    close();
    resetFilter();
  };

  return {
    productCategory,
    isLoading,
    handleValueMaxChange,
    handleValueMinChange,
    handleCategoryToglle,
    selectedCategories: filterState.selectedCategories,
    handleApplyFilters,
    handleResetFilter,
  };
};
