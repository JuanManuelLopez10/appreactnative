import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from './CartItem'
import { DATOS } from '../../data/datos'

const CartScreen = () => {
  const datos = DATOS
  const onDelete = () => {
    console.log('delete');
  }
  const renderItems = ({ item }) => <CartItem item={item} />
 
  return (
    <View>
      <Text>CartScreen</Text>
      <FlatList
      data={DATOS}
      renderItem={renderItems}
      keyExtractor={item => item.id}
      />
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})