import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, View} from 'react-native';
import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import memorySpaces from './src/assets/memoryspaces.png';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import {
  BaiJamjuree_700Bold,
} from '@expo-google-fonts/bai-jamjuree'
import {styled} from "nativewind";
import React from "react";

const StyledStripes = styled(Stripes)

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
      <StyledStripes className="absolute left-2"/>
      <View className="flex-1 items-center justify-center gap-6">
      <Image source={memorySpaces}/>
      </View>
      <StatusBar style="inverted" />
    </ImageBackground>
  );
}