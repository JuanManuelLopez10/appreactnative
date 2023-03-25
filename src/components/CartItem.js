import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const CartItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text>{item.nombre}</Text>
      <Text>{item.precio}</Text>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    item: {
        flex:1,
        padding: 8,
        borderBottomWidth: 1
    }
})