import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavigator'
import { useDispatch, useSelector } from 'react-redux'
import AuthNavigator from './AuthNavigator'
import { changeMode } from '../store/actions/auth.actions'
import { fetchMode } from '../db'
import { useEffect } from 'react'

const MainNavigator = () => {
  const dispatch = useDispatch()
  const DA = async () => {
    const pro = await fetchMode()
    if (pro.rows._array[0] && pro.rows._array[0].mode==='Light') {
      dispatch(changeMode('Dark'))
    } else {
      dispatch(changeMode('Light'))      
    }
  }
  useEffect(()=> {
    DA()
  }, [])
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