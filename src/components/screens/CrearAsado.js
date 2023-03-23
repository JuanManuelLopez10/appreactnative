import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DATOS } from '../../../data/datos'
import ProductItem from '../ProductItem'


const CrearAsado = ({ navigation, route }) => {

  const productos = DATOS.filter(producto => producto.category === route.params.CategoryId)

  const handleSelected = (item) => {
    navigation.navigate('Product', {
      productId: item.id,
      productName: item.nombre,
      productPrice: item.precio
    })
  }

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelected}/>
  )

  return (
    <FlatList data={productos} keyExtractor={item=>item.id} renderItem={renderItem}/>
  )
}

export default CrearAsado

const styles = StyleSheet.create({})