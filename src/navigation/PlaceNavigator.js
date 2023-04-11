import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const PlaceNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.accent
            }
        }}>
            <Stack.Screen name='Cart' component={CartScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      )
}

export default PlaceNavigator

const styles = StyleSheet.create({})