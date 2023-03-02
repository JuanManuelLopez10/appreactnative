import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Titulo = () => {
  return (
    <View>
    <Text style={styles.titulo}>Hagamo un asado</Text>
  </View>
  )
}

export default Titulo

const styles = StyleSheet.create({
  titulo: {
    color: "red",
    fontSize: 22,
    fontWeight: "800"
  }
})