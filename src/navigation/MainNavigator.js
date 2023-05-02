import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavigator'
import { useSelector } from 'react-redux'
import AuthNavigator from './AuthNavigator'
import { deleteUser } from '../db'

const MainNavigator = () => {
  const isAuth = useSelector(state=>state.auth)
//   const deleteu = async () => {
//     const dele = await deleteUser()
    
// }
// deleteu()
  return (
    <>
    <NavigationContainer>
      {
        isAuth.NickName
        ? <TabsNavigator/>
        : <AuthNavigator/>
      }

    </NavigationContainer>
    </>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})