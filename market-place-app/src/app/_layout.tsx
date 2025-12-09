import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/global.css";
import { AppModal } from "../shared/components/AppModal";
import ToastManager from "toastify-react-native";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="(private)" />
      </Stack>
      <AppModal />
      <ToastManager useModal={false} />
    </QueryClientProvider>
  );
}
