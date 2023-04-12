import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PlaceListScreen from '../screens/PlaceListScreen'
import { Ionicons } from '@expo/vector-icons'
import NewPlaceScreen from '../screens/NewPlaceScreen'
import Colors from '../constants/Colors'
import MapScreen from '../screens/MapScreen'

const Stack = createNativeStackNavigator()

const PlaceNavigator = () => (
        <Stack.Navigator initialRoute='Direcciones' screenOptions={{
            headerStyle:{
                backgroundColor: Platform.OS === 'android' ? Colors.primary : Colors.accent
            },
            headerTintColor: 'blue',
        }}>
            <Stack.Screen name='Direcciones' component={PlaceListScreen} options={({navigation}) => ({ title:'Direcciones', headerRight: ()=> (
                <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                    <Text>AAA</Text>
                </TouchableOpacity>
            )})}/>
            <Stack.Screen name='Nuevo' component={NewPlaceScreen} options={({navigation}) => ({ title:'Direcciones', headerRight: ()=> (
                <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                    <Ionicons name='md-add' color='blue' size={23}/>
                </TouchableOpacity>
            )})}/>
                        <Stack.Screen name='Mapa' component={MapScreen} options={({navigation}) => ({ title:'Mapa', headerRight: ()=> (
                <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                    <Text>AAA</Text>
                </TouchableOpacity>
            )})}/>
        </Stack.Navigator>
      )
      

export default PlaceNavigator

const styles = StyleSheet.create({})