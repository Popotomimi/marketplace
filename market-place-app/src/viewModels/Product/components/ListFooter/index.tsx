import { FC } from "react";
import { ActivityIndicator, View } from "react-native";
import { colors } from "../../../../styles/colors";

interface ListFooterProps {
  isloadingMore: boolean;
}

export const ListFooter: FC<ListFooterProps> = ({ isloadingMore }) => {
  if (!isloadingMore) return null;
  return (
    <View className="py-4">
      <ActivityIndicator color={colors["purple-base"]} size={"small"} />
    </View>
  );
};
