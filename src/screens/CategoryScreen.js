import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { filteredProduct, selectProduct } from '../store/actions/products.action'


const CategoryScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const categoryProducts = useSelector(state=>state.products.filteredproducts)
  const category = useSelector(state=>state.categories.selected)

  useEffect (() => {
    dispatch(filteredProduct(category.id))
  }, [])

  const handleSelected = (item) => {
    dispatch(selectProduct(item.id))
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
    <>
    <FlatList data={categoryProducts} keyExtractor={item=>item.id} renderItem={renderItem}/>
    </>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({})