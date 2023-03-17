import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Header from './src/components/header/Header';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import Navigate from './src/navigation/Navigate';

SplashScreen.preventAutoHideAsync()

const App = () => {
  const [idPortrait, setidPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get('screen')
    return dim.height >= dim.width
  };

  const statePortrait = () => setidPortrait(onPortrait())
  useEffect(() => {
    Dimensions.addEventListener('change', statePortrait)
    return () => {
      Dimensions.addEventListener('change', statePortrait)
    }
  });

  const [loaded] = useFonts({
    "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf'),
    "open-sans-regular": require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;

  }
  return (
    <View style={styles.screen} onLayout={onLayoutRootView}>
      <Header />
      <Navigate />
    </View>
  )

}

const styles = StyleSheet.create({
  screen: {
    height: '100%'
  },
});

export default App;