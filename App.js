// React
import React, { useState } from 'react';
// Expo
import { AppLoading } from 'expo';
import * as Fonts from 'expo-font';
import { enableScreens } from 'react-native-screens';
// Navigation
import MealsNavigator from './navigation/MealsNavigator';
// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MealsReducer from './store/reducers/meals';

enableScreens();

// State Management
const rootReducer = combineReducers({
  meals: MealsReducer
});
const store = createStore(rootReducer);

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
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
