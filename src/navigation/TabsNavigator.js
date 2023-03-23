import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigate from './Navigate'
import CartNavigate from './CartNavigate'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

const BottomTabs = createBottomTabNavigator()
const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator screenOptions={{headerShown: false}}>
        <BottomTabs.Screen name='Shop' component={Navigate} options={{tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='md-home' size={24} color={focused ? 'blue' : 'black'}/>
          </View>
        )}}/>
        <BottomTabs.Screen name='Cart-tab' component={CartNavigate} options={{tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='md-cart' size={24} color={focused ? 'blue' : 'black'}/>
          </View>
        )}}/>
    </BottomTabs.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({})