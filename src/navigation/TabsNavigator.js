import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigate from './Navigate'
import CartNavigate from './CartNavigate'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import OrderScreen from '../components/screens/OrderScreen'
import Colors from '../constants/Colors'

const BottomTabs = createBottomTabNavigator()
const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
        <BottomTabs.Screen name='Tienda' component={Navigate} options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='md-home' size={24} color={focused ? Colors.accent : 'black'}/>
          </View>
        )}}/>
        <BottomTabs.Screen name='Carrito' component={CartNavigate} options={{          tabBarShowLabel: false,
tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='md-cart' size={24} color={focused ? Colors.accent : 'black'}/>
          </View>
        )}}/>
                <BottomTabs.Screen name='Orders' component={OrderScreen} options={{          tabBarShowLabel: false,
tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='md-list' size={24} color={focused ? Colors.accent : 'black'}/>
          </View>
        )}}/>
    </BottomTabs.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({})