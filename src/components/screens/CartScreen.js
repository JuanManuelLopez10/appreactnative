import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartItem from '../CartItem'
import { PRODUCTS } from '../../../data/products'

const CartScreen = () => {
  const datos = PRODUCTS
  const onDelete = () => {
    console.log('delete');
  }
  const renderItems = ({ item }) => <CartItem item={item} />
 
  return (
    <View style={styles.screen}>
      <FlatList
      data={PRODUCTS}
      renderItem={renderItems}
      keyExtractor={item => item.id}
      />
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  screen: {
    padding: 10
  }
})