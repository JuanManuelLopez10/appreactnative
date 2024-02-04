import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Colors from '../constants/Colors'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import AuthScreen from '../screens/AuthScreen'
import { useSelector } from 'react-redux'
import AcountScreen from '../screens/AcountScreen'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    const isAuth = useSelector(state=>state.auth)
    return(
    <Stack.Navigator screenOptions={{

    }}>
        {
            isAuth.token
            ? <>
            <Stack.Screen name='Hello' options={{headerShown:false}} component={AcountScreen}/>
            </>       
           :<>
           <Stack.Screen name='Auth' component={AuthScreen} options={{headerShown: false}}/>
            <Stack.Screen name='SignIn' component={SignInScreen} options={{headerShown: false}}/>
            <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown: false}}/>
            <Stack.Screen name='CreateUser' component={AcountScreen} options={{headerShown: false}}/>
           </>
        }
    </Stack.Navigator>
)


}

export default AuthNavigator

