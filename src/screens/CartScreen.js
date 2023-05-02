import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import CartItem from '../components/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { confirmCart } from '../store/actions/cart.action'

const CartScreen = () => {
  const dispatch = useDispatch()
  const datos = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)
  const myUser = useSelector(state => state.auth)
  console.log('                                 ',myUser.FriendsRequests);
  


  const renderItems = ({ item }) => <CartItem item={item} />
  const confirm = (payload, total) => {
    dispatch(confirmCart(payload, total))
  }
  return (
    <View style={styles.screen}>
      <FlatList
      data={datos}
      renderItem={renderItems}
      keyExtractor={item => item.id}
      />
      <Text>{total}</Text>
      <Button title='Confirmar carrito' onPress={()=> {confirm(datos, total)}}/>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  screen: {
    padding: 10
  }
})