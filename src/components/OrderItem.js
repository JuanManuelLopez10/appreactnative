import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const formatDay = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString()
}

const OrderItem = ({ item }) => {
    return (
        <View style={styles.order}>
            <View>
                <Text style={styles.date}>Fecha {formatDay(item.date)}</Text>
                <Text style={styles.total}>Total {item.total}</Text>
            </View>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    order: {
        flexDirection: 'row',
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