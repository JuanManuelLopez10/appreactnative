import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '../screens/Index'
import ProductDetail from '../screens/ProductDetail'
import CategoryScreen from '../screens/CategoryScreen'
import CreateAsado from '../screens/CreateAsado'
import SelectGestsScreen from '../screens/SelectGestsScreen'
import SelectUbandScreen from '../screens/SelectUbandScreen'
import MapScreen from '../screens/MapScreen'
import { TouchableOpacity } from 'react-native'

const Stack = createNativeStackNavigator()

const Navigate = () => {
  return (
    
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Index}/>
            <Stack.Screen name="CreateAsado" component={CreateAsado} options={{title: 'Crear asado'}}/>
            <Stack.Screen name="SelectUbicationAndDate" component={SelectUbandScreen} options={{title: 'Crear asado'}}/>
            <Stack.Screen name="SelectGuests" component={SelectGestsScreen} options={{title: 'Crear asado'}}/>
            <Stack.Screen name='Mapa' component={MapScreen} options={({navigation}) => ({ title:'Mapa', headerRight: ()=> (
                <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                    <Text>AAA</Text>
                </TouchableOpacity>
            )})}/>
      
            <Stack.Screen name="Productos" component={CategoryScreen} options={({ route }) => ({title: route.params.CategoryName})} />
            <Stack.Screen name="Product" component={ProductDetail} options={({ route }) => ({title: route.params.productName})} />
        </Stack.Navigator>
  )
}

export default Navigate

const styles = StyleSheet.create({

})