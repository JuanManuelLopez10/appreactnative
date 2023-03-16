import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '../components/screens/Index'
import Registrarse from '../components/screens/Registrarse'
import CrearAsado from '../components/screens/CrearAsado'

const Stack = createNativeStackNavigator()

const Navigate = () => {
  return (
    
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Registrarse}/>
            <Stack.Screen name="index" component={Index}/>
            <Stack.Screen name="creado" component={CrearAsado}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigate

const styles = StyleSheet.create({})