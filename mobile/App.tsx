import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import {
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree'



export default function App() {

  const[fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if(!fontsLoaded) return null;
  return (
    <View className="bg-zinc-800 flex-1 items-center justify-center">
      <Text className="text-zinc-50 font-bold text-5xl">My First ReactNative App</Text>
      <StatusBar style="inverted" />
    </View>
  );
}