import React ,{ useCallback, useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import MainNavigator from './src/navigation/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [idPortrait, setidPortrait] = useState(true)
  const onPortrait = () => {
    const dim = Dimensions.get('screen')
    return dim.height >= dim.width
  }
  const statePortrait = () => setidPortrait(onPortrait())
  useEffect(()=>{
    Dimensions.addEventListener('change', statePortrait)
    return () => {
      Dimensions.addEventListener('change', statePortrait)
    }
  })
  const [loaded] = useFonts({
    "open-sans-bold" : require('./assets/fonts/OpenSans-Bold.ttf'),
    "open-sans-regular" : require('./assets/fonts/OpenSans-Regular.ttf'),
  })
  const onLayoutRootView = React.useCallback(async () => {
    if(loaded){
      await SplashScreen.hideAsync();
    }
  }, [loaded]);


  const [nombreusuario, setnombreusuario] = useState()
  const [contraseñausuario, setcontraseñausuario] = useState()
  const [TipoNuevoAsado, setTipoNuevoAsado] = useState(undefined)
  const [itemText, setItemText] = useState('')
  const [itemlleva, setItemlleva] = useState('')
  const [items, setItems] = useState([
    {id: 1, value: "item0"}
  ])
  const registrarse = (a, b) => {
    setnombreusuario(a)
    setcontraseñausuario(b)
  }
  const cerrarsesion = () => {
    setnombreusuario()
    setcontraseñausuario()
  }
    const [OpenMenu, setOpenMenu] = useState(false)
  const openmenu = () => {
    console.log("abrir menu");
    setOpenMenu(true)
  }
  const closemenu = () => {
    setOpenMenu(false)
  }

  const [TipoDeAsado, setTipoDeAsado] = React.useState("");

  const SeleccionarTipoDeAsado = (val) => {
    setTipoDeAsado(val)
    console.log(TipoDeAsado);
  }
  const EmpezarAsado = () => {
    setTipoNuevoAsado(TipoDeAsado)
    console.log("astr");
    console.log(TipoNuevoAsado);

  }
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
