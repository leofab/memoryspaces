import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground } from 'react-native';
import blurBg from './src/assets/bg-blur.png'

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
    <ImageBackground
      source={blurBg}
      className="relative bg-zinc-800 flex-1 items-center"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StatusBar style="inverted" />
    </ImageBackground>
  );
}