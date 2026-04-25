import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../../../../styles/colors";
import { TouchableOpacity } from "react-native";
import { FC } from "react";

interface StarsParams {
  rating: number;
  handleRatingChange: (rating: number) => void;
}

export const Stars: FC<StarsParams> = ({ rating, handleRatingChange }) => {
  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const isSelected = starNumber <= rating;
    return (
      <TouchableOpacity
        onPress={() => handleRatingChange(starNumber)}
        key={index}>
        <Ionicons
          name={isSelected ? "star" : "star-outline"}
          size={32}
          color={isSelected ? colors["purple-base"] : colors.grays[400]}
        />
      </TouchableOpacity>
    );
  });
};
