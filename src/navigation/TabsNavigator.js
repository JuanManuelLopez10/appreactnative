import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Navigate from './Navigate'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import AuthNavigator from './AuthNavigator'
import NotificationsScreen from '../screens/NotificationsScreen'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { LinearGradient } from 'expo-linear-gradient';
import { fetchMode } from '../db'
import { changeMode } from '../store/actions/auth.actions'
import { Animated } from 'react-native'
import SearchScreen from '../screens/SearchScreen'
import { KeyboardAvoidingView } from 'react-native'

const BottomTabs = createBottomTabNavigator()

const TabsNavigator = () => {
  const theme = useSelector(state => state.theme)
  const auth = useSelector(state => state.auth)
  const imagen = auth.Profile.OptionImage
  const dispatch = useDispatch()


  const fadeAnimSun = useRef(new Animated.Value(1)).current
  const fadeAnimMoon = useRef(new Animated.Value(0)).current

  const fadeToDark = async () => {
    const current = await fetchMode()
    const algo = current.rows._array[0].mode
    dispatch(changeMode(algo))

    Animated.timing(fadeAnimSun, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();


    Animated.timing(fadeAnimMoon, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeToLight = async () => {
    const current = await fetchMode()
    const algo = current.rows._array[0].mode
    dispatch(changeMode(algo))

    Animated.timing(fadeAnimMoon, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();


    Animated.timing(fadeAnimSun, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };


  return (
    <KeyboardAvoidingView behavior='height' style={{height:'100%'}}>
    <BottomTabs.Navigator screenOptions={{ tabBarStyle: styles.Tabbar }} >
      <BottomTabs.Screen name='Tienda' component={Navigate} options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <LinearGradient colors={focused ? [Colors.primary, Colors.darkBackground] : [Colors.darksecondaryBackground, Colors.darksecondaryBackground]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={focused ? styles.TabbarOptionFocused : styles.TabbarOption}>
            <Ionicons name='md-home' size={fontPixel(20)} color={'white'} />
          </LinearGradient>
        )
      }} />
      <BottomTabs.Screen name='Search' component={SearchScreen} options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <LinearGradient colors={focused ? [Colors.primary, Colors.darkBackground] : [Colors.darksecondaryBackground, Colors.darksecondaryBackground]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={focused ? styles.TabbarOptionFocused : styles.TabbarOption}>
            <Ionicons name='search' size={fontPixel(20)} color={'white'} />
          </LinearGradient>
        )
      }} />
      <BottomTabs.Screen name='Calendar' component={NotificationsScreen} options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <LinearGradient colors={focused ? [Colors.primary, Colors.darkBackground] : [Colors.darksecondaryBackground, Colors.darksecondaryBackground]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={focused ? styles.TabbarOptionFocused : styles.TabbarOption}>
            <Ionicons name='calendar' size={fontPixel(20)} color={'white'} />
          </LinearGradient>
        )
      }} />
      <BottomTabs.Screen name='Notifications' component={NotificationsScreen} options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <LinearGradient colors={focused ? [Colors.primary, Colors.darkBackground] : [Colors.darksecondaryBackground, Colors.darksecondaryBackground]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={focused ? styles.TabbarOptionFocused : styles.TabbarOption}>
            <Ionicons name='md-notifications' size={fontPixel(20)} color={'white'} />
          </LinearGradient>
        )
      }} />
      <BottomTabs.Screen name='Cuenta' component={AuthNavigator} options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <LinearGradient colors={focused ? [Colors.primary, Colors.darkBackground] : [Colors.darksecondaryBackground, Colors.darksecondaryBackground]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={focused ? styles.TabbarOptionFocused : styles.TabbarOption}>
            <Ionicons name='md-person' size={fontPixel(20)} color={'white'} />
          </LinearGradient>
        )
      }} />
    </BottomTabs.Navigator>
    </KeyboardAvoidingView>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  changeTheme: {
    height: heightPixel(40),
    width: widthPixel(70),
    marginRight: widthPixel(30),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  Tabbar: {
    height: heightPixel(80),
    backgroundColor: Colors.darksecondaryBackground,
    paddingVertical: heightPixel(5)
  },
  TabbarOption: {
    position: 'relative',
    width: widthPixel(40),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPixel(50),
    borderRadius: 30,
  },
  TabbarOptionFocused: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1030,
    bottom: heightPixel(30),
    width: heightPixel(55),
    height: heightPixel(55),
    shadowColor: Colors.light,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  }
})