import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderItem from '../OrderItem'
import { ORDERS } from '../../../data/orders'

const OrderScreen = () => {

    const renderCardItem = (itemData) => (
        <OrderItem item={itemData.item}/>
    )
  return (
    <View>
        <FlatList data={ORDERS} keyExtractor={(item) => item.id.toString()} renderItem={renderCardItem} numColumns={1}/>
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})