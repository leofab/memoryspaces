import { StatusBar } from 'expo-status-bar';
import {Image, ImageBackground, View, Text, TouchableOpacity} from 'react-native';
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
      className="relative bg-zinc-800 flex-1 items-center px-8"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2"/>
      <View className="flex-1 items-center justify-center gap-6">
      <Image source={memorySpaces}/>
        <View className="space-y-2 items-center justify-center">
          <Text className="text-gray-50 font-title text-2xl leading-tight font-bold">
            Suas memórias em um só lugar
          </Text>
          <Text className="text-gray-100 font-body text-base leading-relaxed">
            Colecione momentos, fotos, vídeos e muito mais.
          </Text>
        </View>
        <TouchableOpacity className="rounded-full bg-blue-400 px-5 py-3">
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar Lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="inverted" />
    </ImageBackground>
  );
}