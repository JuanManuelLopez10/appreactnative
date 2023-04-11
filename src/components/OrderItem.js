import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const formatDay = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString()
}

const OrderItem = ({ item }) => {
    console.log(item);
    return (
        <View>
            <View>
                <Text>{formatDay(item.date)}</Text>
                <Text>Total: {item.total}</Text>
            </View>            
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    order: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderColor: 'red',
        borderWidth: 3,
        borderRadius: 5
    },
    date: {
        fontSize: 18,
    },
    total: {
        fontSize: 18,
    }
})