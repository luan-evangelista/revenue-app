import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-white">My app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
