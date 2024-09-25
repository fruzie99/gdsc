import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useFonts } from 'expo-font';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  useFonts({
    "PBold":require('./../../assets/fonts/Poppins-Bold.ttf'),
    "PEL":require('./../../assets/fonts/Poppins-ExtraLight.ttf'),
    "PL":require('./../../assets/fonts/Poppins-Light.ttf'),
    "PM":require('./../../assets/fonts/Poppins-Medium.ttf')

  })

  return (
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
   
     
    </Tabs>
  );
}
