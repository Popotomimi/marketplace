import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/global.css";
import { AppModal } from "../shared/components/AppModal";
import ToastManager from "toastify-react-native";
import { useUserStore } from "../shared/store/user-store";

const queryClient = new QueryClient();

export default function RootLayout() {
  const { token } = useUserStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(public)" />
        <Stack.Screen name="(private)" />
      </Stack>
      <AppModal />
      <ToastManager useModal={false} />
    </QueryClientProvider>
  );
}
