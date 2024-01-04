import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavigator'
import { useDispatch, useSelector } from 'react-redux'
import AuthNavigator from './AuthNavigator'
import { changeMode } from '../store/actions/auth.actions'
import { fetchMode } from '../db'
import { useEffect } from 'react'
import { getGifts } from '../store/actions/gifts.actions'
import { getPacks } from '../store/actions/packs.actions'

const MainNavigator = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    const recargar = () => {
      dispatch(getGifts())
      dispatch(getPacks())
    }
    const intervaloId = setInterval(recargar, 1000);
    return () => clearInterval(intervaloId)
  },[])
  const isAuth = useSelector(state=>state.auth)
//   const deleteu = async () => {
//     const dele = await deleteUser()
    
// }
// deleteu()
  return (
    <>
    <NavigationContainer>
      {
        isAuth.Name
        ? <TabsNavigator />
        : <AuthNavigator/>
      }

    </NavigationContainer>
    </>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})