import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import OrderItem from '../components/OrderItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../store/actions/order.action'

const OrderScreen = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders)
  useEffect(()=>{
    dispatch(getOrders());
    console.log(orders);
  }, [])

    const renderCardItem = (itemData) => (
        <OrderItem item={itemData.item}/>
    )

    return (
    <View>
        <FlatList data={orders.list} keyExtractor={(item) => item.id.toString()} renderItem={renderCardItem} numColumns={1}/>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})