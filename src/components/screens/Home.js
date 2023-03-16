import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from './Index';
import Registrarse from './Registrarse';

const Stack = createNativeStackNavigator();

const Home = () => {
return(    <View>
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Registrarse}/>
            <Stack.Screen name='Index' component={Index}/>
        </Stack.Navigator>
    </NavigationContainer>
    </View>)
}

export default Home

const styles = StyleSheet.create({})