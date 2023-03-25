import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '../components/screens/Index'
import COLORS  from '../constants/Colors'
import ProductDetail from '../components/screens/ProductDetail'
import CategoryScreen from '../components/screens/CategoryScreen'

const Stack = createNativeStackNavigator()

const Navigate = () => {
  return (
    
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Index}/>
            <Stack.Screen name="Productos" component={CategoryScreen} options={({ route }) => ({title: route.params.CategoryName})} />
            <Stack.Screen name="Product" component={ProductDetail} options={({ route }) => ({title: route.params.productName})} />
        </Stack.Navigator>
  )
}

export default Navigate

const styles = StyleSheet.create({

})