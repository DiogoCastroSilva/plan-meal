// React
import React, { useState } from 'react';
// React Native
import { Text, View } from 'react-native';
// Expo
import { AppLoading } from 'expo';
import * as Fonts from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';


// Location of the Fonts
const fetchFonts = () => {
  return Fonts.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

// Component
export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  // Loading Fonts when app starts
  if (!isFontLoaded) {
    return <AppLoading
              startAsync={fetchFonts}
              onFinish={() => setIsFontLoaded(true)}
            />
  }

  // Component View
  return <MealsNavigator />;
}
