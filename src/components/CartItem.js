import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../store/actions/cart.action'

const CartItem = ({ item }) => {

  const dispatch = useDispatch()
  const removeProduct = (item) => {
    dispatch(removeItem(item))
  }

  return (
    <View style={styles.item}>
      <Text>{item.nombre}</Text>
      <Text>{item.precio}</Text>
      <Text>{item.cantidad}</Text>
      <TouchableOpacity onPress={()=> {removeProduct(item.id)}}>
        <Text>Eliminar</Text>
      </TouchableOpacity>
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