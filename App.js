import { StatusBar } from 'expo-status-bar';
import React ,{ useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, TouchableWithoutFeedback} from 'react-native';
import Modaleliminar from './src/components/Modal';
import Formulario from './src/components/Formulario';
import ListaItems from './src/components/ListaItems';
import Header from './src/components/header/Header';
import Card from './src/components/Card';
import Input from './src/components/Input';
import Registrarse from './src/components/screens/Registrarse';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

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


  const [nombreusuario, setnombreusuario] = useState()
  const [contraseñausuario, setcontraseñausuario] = useState()

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

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedItem, setselectedItem] = useState(null)
  const eliminaritem = (id) => {
    setItems((antes) => antes.filter((item) => item.id !== id))
    setModalVisible(false)
    setselectedItem(null)
  } 
  const selectItem = (item) => {
    setselectedItem(item)
    setModalVisible(true)
  }

  const onchangeText = (text) => {
    setItemText(text)
  }
  const onchangelleva = (text) => {
    setItemlleva(text)
  }
  const agregar = () => {
    if (itemText!='' && itemlleva!='') {
      setItems(items => [...items, {id: Date.now(), nombre: itemText, lleva: itemlleva}])
      setItemText('')
      setItemlleva('')
      console.log(items);
    }
  }
    const [OpenMenu, setOpenMenu] = useState(false)
  const openmenu = () => {
    console.log("abrir menu");
    setOpenMenu(true)
  }
  const closemenu = () => {
    setOpenMenu(false)
  }

  
  if(!loaded){
    return null;
  }


  return(
    <View style={styles.screen} onLayout={onLayoutRootView}>
      <Header openmenu={openmenu} closemenu={closemenu} OpenMenu={OpenMenu} cerrarsesion={cerrarsesion} />
      {
        nombreusuario && contraseñausuario
        ?         <>
              <Text style={styles.saludo}>Hola,  {nombreusuario}</Text>
            <Input />
            <Formulario onchangeText={onchangeText} itemText={itemText} onchangelleva={onchangelleva} itemlleva={itemlleva} agregar={agregar} />
            <ListaItems items={items} selectItem={selectItem} />
            <Modaleliminar modalVisible={modalVisible} eliminaritem={eliminaritem} selectedItem={selectedItem} setModalVisible={setModalVisible} setselectedItem={setselectedItem} />
    </>
        : <Registrarse registrarse={registrarse}/>

      }
    </View>
  )

}

const styles = StyleSheet.create({

  saludo: {
    textAlign: 'center',
    fontFamily: 'open-sans-regular',
    fontSize: 20,
    margin: 10
  }
});
