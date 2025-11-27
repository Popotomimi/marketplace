import { Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

export default function App() {
  return (
    <View>
      <Text className="text-purple-base">Olá mundo!</Text>
      <TouchableOpacity onPress={() => router.navigate("/login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
