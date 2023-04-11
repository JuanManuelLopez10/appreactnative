import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/actions/cart.action'

const ProductDetail = ({ navigation }) => {
  const product = useSelector(state=>state.products.selected)
  console.log(product);
  const dispatch = useDispatch()
  const producto = {
    name: product.nombre,
    price: product.precio
  }
  const addproduct = (item) => {
    dispatch(addItem(item))
    console.log(item);
  }
  return (
    <View style={styles.ProductDetail}>
      <Text >{producto.name}</Text>
      <Text>Precio x Kg: ${producto.price}</Text>
      <TouchableOpacity onPress={()=> {addproduct(product)}}>
        <Text>Agregar al carrito</Text>
      </TouchableOpacity>
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