import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavigator'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import AuthNavigator from './AuthNavigator'

const MainNavigator = () => {
  const isAuth = useSelector(state=>state.auth)
  return (
    <>
    <NavigationContainer>
      {
        isAuth.email
        ? <TabsNavigator/>
        : <AuthNavigator/>
      }

    </NavigationContainer>
    </>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})