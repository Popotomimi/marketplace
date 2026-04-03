import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Product() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Detail Product: {id}</Text>
    </View>
  );
}
