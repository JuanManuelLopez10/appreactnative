import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigate from './Navigate'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import AuthNavigator from './AuthNavigator'
import NotificationsScreen from '../screens/NotificationsScreen'

const BottomTabs = createBottomTabNavigator()
const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name='Tienda' component={Navigate} options={{
        tabBarShowLabel: false,
        headerShown: false,
        
        tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='md-home' size={24} color={focused ? Colors.primary : 'black'} />
          </View>
        )
      }} />
            <BottomTabs.Screen name='Notifications' component={NotificationsScreen} options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='md-notifications' size={24} color={focused ? Colors.primary : 'black'} />
          </View>
        )
      }} />
      <BottomTabs.Screen name='Cuenta' component={AuthNavigator} options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View>
            <Ionicons name='md-person' size={24} color={focused ? Colors.primary : 'black'} />
          </View>
        )
      }} />
    </BottomTabs.Navigator>

  )
}

export default TabsNavigator

const styles = StyleSheet.create({})