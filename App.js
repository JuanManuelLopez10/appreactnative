import React ,{ useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import MainNavigator from './src/navigation/MainNavigator';
import { Provider} from 'react-redux';
import store from './src/store';
import { deleteUser, initUser } from './src/db';

SplashScreen.preventAutoHideAsync()
// deleteUser()
initUser()

// initDarkMode()
// const ya = async () => {
//   const pro = await fetchMode()
//   if (pro.rows._array[0]) {
//   } else {
//     insertMode('Light')

//   }
// }
// ya()

export default function App() {
  const [loaded] = useFonts({
    "open-sans-bold" : require('./assets/fonts/OpenSans-Bold.ttf'),
    "open-sans-regular" : require('./assets/fonts/OpenSans-Regular.ttf'),
  })
  const onLayoutRootView = React.useCallback(async () => {
    if(loaded){
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if(!loaded){
    return null;
  }
  
  return(
  <>
    <Provider store={store}>
    <KeyboardAvoidingView style={{height: '100%', width: '100%'} }>
    <View style={styles.screen} onLayout={onLayoutRootView}>   
      <MainNavigator/>
    </View>
    </KeyboardAvoidingView>
    </Provider>
    </>
  )

}

const styles = StyleSheet.create({

  screen:{
    height: '100%'
  },
  saludo: {
    textAlign: 'center',
    fontFamily: 'open-sans-regular',
    fontSize: 20,
    margin: 10
  }
});
