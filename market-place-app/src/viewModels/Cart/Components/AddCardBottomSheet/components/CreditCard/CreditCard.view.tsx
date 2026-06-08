import { FC } from "react";
import { Text, View } from "react-native";
import { useCreditCardViewModel } from "./useCreditCard.viewModel";
import { FocusedField } from "../../useAddCardBottomSheet.viewModel";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import clsx from "clsx";
import { CardData } from ".";

const PURPLE_GRADIENT: readonly [string, string, string] = [
  "#5B3A8F",
  "#6B5CA5",
  "#7B6CB5",
];

export const CreditCardView: FC<
  ReturnType<typeof useCreditCardViewModel> & {
    focusedField: FocusedField | null;
  } & {
    cardData: CardData;
  }
> = ({
  focusedField,
  backAnimatedStyle,
  frontAnimatedStyle,
  cardData,
  formatCardNumber,
}) => {
  return (
    <View className="h-[192px]">
      <Animated.View
        style={[
          frontAnimatedStyle,
          {
            position: "absolute",
            width: "100%",
            height: 192,
            backfaceVisibility: "hidden",
          },
        ]}>
        <LinearGradient
          colors={PURPLE_GRADIENT}
          start={{ x: 0, y: 0.5 }}
          style={{ flex: 1, borderRadius: 16, padding: 20 }}>
          <View className="flex-row justify-between items-center mb-4">
            <View className="w-12 h-8 bg-yellow-400 rounded-md" />
          </View>

          <View
            className={clsx("py-2 px-1 mb-6 rounded-lg", {
              "": focusedField !== "number",
              "bg-white/20": focusedField === "number",
            })}>
            <Text className="text-white text-lg tracking-widest text-center">
              {formatCardNumber(cardData.number)}
            </Text>
          </View>

          <View className="flex-row justify-between items-end">
            <View
              className={clsx("flex-1 py-2 px-2 rounded-lg", {
                "": focusedField !== "name",
                "bg-white/20": focusedField === "name",
              })}>
              <Text className="text-white text-sm font-bold uppercase">
                PORTADOR
              </Text>

              <Text className="text-white text-sm font-bold uppercase">
                {cardData.name.length ? cardData.name : "NOME DO TITULAR"}
              </Text>
            </View>

            <View
              className={clsx("ml-4 py-1 rounded-lg", {
                "": focusedField !== "expiry",
                "bg-white/20": focusedField === "expiry",
              })}>
              <Text className="text-white text-xs mb-1 font-semibold">
                VÁLIDO ATÉ
              </Text>
              <Text className="text-white text-sm font-bold">
                {cardData.expiry.length ? cardData.expiry : "MM/AA"}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>

      <Animated.View
        style={[
          backAnimatedStyle,
          {
            position: "absolute",
            width: "100%",
            height: 192,
            backfaceVisibility: "hidden",
          },
        ]}>
        <LinearGradient
          colors={PURPLE_GRADIENT}
          start={{ x: 0, y: 0.5 }}
          style={{ flex: 1, borderRadius: 16 }}>
          <View className="h-[40px] bg-black w-[100%] mt-[20px]" />

          <View className="flex-1 justify-center items-end px-5">
            <View className="w-24">
              <Text className="text-white mb-2 text-xs font-semibold">CVV</Text>

              <View
                className={clsx("bg-white p-2 rounded h-8 justify-center", {
                  "": focusedField !== "cvv",
                  "bg-blue-100": focusedField === "cvv",
                })}>
                <Text>{cardData.cvv || "..."}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};
