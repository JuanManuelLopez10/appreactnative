import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavigator'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'

const MainNavigator = () => {

  return (
    <>
    <NavigationContainer>
      <TabsNavigator/>
    </NavigationContainer>
    </>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})