import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registrarse from '../screens/Registrarse';
import CrearAsado from '../screens/CrearAsado';
import Index from '../screens/Index';

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