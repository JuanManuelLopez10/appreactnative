import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList, Pressable} from 'react-native';
import Titulo from './components/Titulo';
import Modaleliminar from './components/Modal';
import Formulario from './components/Formulario';

export default function App() {
  const [itemText, setItemText] = useState('')
  const [itemlleva, setItemlleva] = useState('')
  const [items, setItems] = useState([
    {id: 1, value: "item0"}
  ])

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
    setItems(items => [...items, {id: Date.now(), nombre: itemText, lleva: itemlleva}])
    setItemText('')
    setItemlleva('')
    console.log(items);
  }


  return(
    <View style={styles.screen}>
      <Titulo/>
      <Formulario onchangeText={onchangeText} itemText={itemText} onchangelleva={onchangelleva} itemlleva={itemlleva} agregar={agregar}/>
      
        <FlatList
        data={items}
        renderItem={(itemData) => {
          return(
          <Pressable
          onPress={() =>{selectItem(itemData.item)}}>
            <Text>{itemData.item.nombre}</Text>
            <Text>{itemData.item.lleva}</Text>
          </Pressable>
          )
        }}
        />
    <Modaleliminar modalVisible={modalVisible} eliminaritem={eliminaritem} selectedItem={selectedItem} setModalVisible={setModalVisible} setselectedItem={setselectedItem}/>

    </View>
    
  )

}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  },

});
