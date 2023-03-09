import { StyleSheet, Text, View, Button, Pressable, Modal, FlatList } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../constants/Colors'

const Header = (props) => {

  const [OpenMenu, setOpenMenu] = useState(false)
  const openmenu = () => {
    console.log("abrir menu");
    setOpenMenu(true)
  }
  const closemenu = () => {
    setOpenMenu(false)
  }


  if (OpenMenu===false) {
    return (
      <View style={styles.header}>
        <Text style={styles.titulo}>Hagamo un asado</Text>
        <Pressable style={styles.botonmenu} onPress={()=>{openmenu()}}>
          <Text>Menu</Text>
        </Pressable>
      </View>  
    )
  }else{
    return (
      <>
      <View style={styles.header}>
        <Text style={styles.titulo}>Hagamo un asado</Text>
        <Button style={styles.botonmenu} onPress={()=>{closemenu()}} title='X'/>
      </View>
      <Modal>
      <Button style={styles.botonmenu} onPress={()=>{closemenu()}} title='X'/>
        <Text>AAA</Text>
        <Button title='cerrar sesion' onPress={() => {props.cerrarsesion()}}/>
        <FlatList
        data={[
          {key: 'Crear asado'}, 
          {key: 'Asados cerca'}, 
          {key: 'Cuenta'}, 
          {key: 'Amigos'}, 
          {key: 'Cerrar sesión'}
        ]}
        renderItem={({item}) => <Pressable><Text style={styles.item}>{item.key}</Text></Pressable>}
      />

      </Modal>
      
      </>

    )
  }

}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: "red",
        height: "30%",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "flex-end",
        paddingBottom: 10,
    },
    titulo: {
        fontSize: 25,
        marginLeft: 10,
        fontWeight: '700',
        width: "60%"
    },
    botonmenu: {
        backgroundColor: COLORS.primary,
        borderColor: "white",
        padding: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 12},
        shadowOpacity: 0.58,
        shadowRadius: 16,
        elevation: 8
    }
})