import React ,{ useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { init } from './src/db';

SplashScreen.preventAutoHideAsync()
  init()
    .then(() => console.log('Database inicializada'))
    .catch(err => {
    console.log('       error:', err);
    console.log('       error:', 'Database fail connect');
  })
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
    <View style={styles.screen} onLayout={onLayoutRootView}>
      <MainNavigator/>
    </View>
    </Provider>
    </>
    // 
    //   <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={30}>
    
    //   <Header openmenu={openmenu} closemenu={closemenu} OpenMenu={OpenMenu} cerrarsesion={cerrarsesion} />
    //     <TextInput placeholder='No se que hace'/>
    //   {
    //     nombreusuario && contraseñausuario
    //     ?         <>
    //         <Index SeleccionarTipoDeAsado={SeleccionarTipoDeAsado} EmpezarAsado={EmpezarAsado} TipoNuevoAsado={TipoNuevoAsado}/>
    // </>
    //     : <Registrarse registrarse={registrarse}/>

    //   }
    //   </KeyboardAvoidingView>

    // </View>
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
