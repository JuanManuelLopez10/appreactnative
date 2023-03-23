import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '../components/screens/Index'
import Registrarse from '../components/screens/Registrarse'
import CrearAsado from '../components/screens/CrearAsado'
import COLORS  from '../constants/Colors'
import ProductDetail from '../components/screens/ProductDetail'

const Stack = createNativeStackNavigator()

const Navigate = () => {
  return (
    
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle:{
            backgroundColor: Platform.OS === 'android' ? COLORS.primary : COLORS.accent
          },
          headerTintColor: 'white'
        }}>
            <Stack.Screen name="Home" component={Registrarse}/>
            <Stack.Screen name="index" component={Index}/>
            <Stack.Screen name="Productos" component={CrearAsado} options={({ route }) => ({title: route.params.CategoryName})} />
            <Stack.Screen name="Product" component={ProductDetail} options={({ route }) => ({title: route.params.productName})} />
        </Stack.Navigator>
  )
}

export default Navigate

const styles = StyleSheet.create({

})