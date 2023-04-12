import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigate from './Navigate'
import CartNavigate from './CartNavigate'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import OrderScreen from '../screens/OrderScreen'
import ImageSelector from '../components/ImageSelector'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import PlaceNavigator from './PlaceNavigator'

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
        <BottomTabs.Screen name='Camera' component={PlaceNavigator} options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='md-camera' size={24} color={focused ? Colors.accent : 'black'}/>
          </View>
        )}}/>
    </BottomTabs.Navigator>
    
  )
}

export default TabsNavigator

const styles = StyleSheet.create({})