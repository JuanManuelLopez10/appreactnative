import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetail = ({ navigation }) => {
  const product = useSelector(state=>state.products.selected)
  const producto = {
    name: product.nombre,
    price: product.precio
  }
  return (
    <View style={styles.ProductDetail}>
      <Text >{producto.name}</Text>
      <Text>Precio x Kg: ${producto.price}</Text>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    product: {
        backgroundColor: 'blue',
        height: 500,
        width: '70%'
    },
    ProductDetail: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})