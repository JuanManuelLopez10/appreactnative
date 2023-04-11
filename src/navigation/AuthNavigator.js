import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from '../screens/AuthScreen'
import Colors from '../constants/Colors'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    return(
    <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.accent
        }
    }}>
        <Stack.Screen name='Cart' component={AuthScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
)


}

export default AuthNavigator

