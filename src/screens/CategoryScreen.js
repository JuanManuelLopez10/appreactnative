import { Button, FlatList, Image, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'
import { PRODUCTS } from '../../data/Products'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { Pressable } from 'react-native'
import Colors from '../constants/Colors'

const CategoryScreen = ({navigation}) => {
    const Category = useSelector(state => state.products)
    const products = PRODUCTS
    const filteredProducts = products.filter(item => item.category===Category.category)
    const handleSelect = (item) => {
        navigation.navigate('ProductScreen')
    }
    
    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelect={handleSelect}/>
      )
    
    return (
    <View>
      <Text>{Category.category}</Text>
      <FlatList data={filteredProducts} keyExtractor={item=>item.title} renderItem={renderItem}/>
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
    Modal: {
    marginTop: heightPixel(80),
       width: widthPixel(300),
       height: heightPixel(500),
       alignSelf: 'center',
       elevation: 20,
       backgroundColor: 'white',
       padding: 10
    
    },
    Image: {
        height: heightPixel(200),
        width: widthPixel(200)
    },
    ModalTitle: {
        fontSize: fontPixel(25)
    },
    ModalPrice: {
        fontSize: fontPixel(20)
    },
    QuantityModal: {
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
    },
    Quantity: {
        height: '90%',
        alignSelf: 'center',
        padding: widthPixel(3),
        fontSize: fontPixel(40)
    },
    ChangeQuantityButton: {
        width: widthPixel(30),
        display: 'flex',
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor: Colors.primary,
        marginVertical: heightPixel(3),
        height: heightPixel(30),
    },
    ChangeQuantityButtonView: {
        width: '30%',
        display: 'flex',
        justifyContent: 'space-around',
        alignSelf:'center',

    },
    ButtonText:{
        color: Colors.light,
        textAlign:'center'
}
})