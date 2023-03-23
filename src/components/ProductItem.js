import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProductItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity style={styles.product} onPress={()=> onSelected(item)}>
            <View>
                <Text>{item.nombre}</Text>
            </View>
            <View>
                <Text>$ {item.precio}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    product: {
        margin: 30,
        backgroundColor: '#ccc',
        elevation: 20,
        padding: 10
    }
})