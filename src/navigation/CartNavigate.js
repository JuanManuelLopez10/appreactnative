import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Colors from '../constants/Colors'
import CartScreen from '../components/screens/CartScreen'

const Stack = createNativeStackNavigator()
const CartNavigate = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.accent
        }
    }}>
        <Stack.Screen name='Cart' component={CartScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default CartNavigate

const styles = StyleSheet.create({})