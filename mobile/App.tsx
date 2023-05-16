import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-zinc-800 flex-1 items-center justify-center">
      <Text className="text-zinc-50 font-bold text-5xl">My First ReactNative App</Text>
      <StatusBar style="inverted" />
    </View>
  );
}