import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, Modal, FlatList } from 'react-native';
import COLORS from '../../constants/Colors';
import { fontPixel } from '../../../utils/normalize';


const Header = () => {

  const [TipoDeAsado, setTipoDeAsado] = useState("");
  const [OpenMenu, setOpenMenu] = useState(false)

  const cerrarsesion = () => {
    setnombreusuario()
    setcontraseñausuario()
  };

  const openmenu = () => {
    console.log("abrir menu");
    setOpenMenu(true)
  };

  const onbotoncerrarmenu = () => {
    cerrarsesion()
    setOpenMenu(false)
  };

  console.log(fontPixel(10));
  return (
    <View id='Header' style={styles.header}>
      <Text style={styles.titulo}>Hagamo un asado</Text>
      <Pressable style={styles.botonmenu} onPress={() => openmenu()}>
        <Text>Menu</Text>
      </Pressable>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
    height: "15%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "flex-end",
    paddingBottom: 10,
  },
  titulo: {
    fontSize: fontPixel(35),
    lineHeight: fontPixel(30),
    marginLeft: 10,
    fontWeight: '700',
    width: "60%"
  },
  botonmenu: {
    backgroundColor: COLORS.primary,
    borderColor: "white",
    padding: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 8
  }
})