import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '../screens/Index'
import ProductDetail from '../screens/ProductDetail'
import CategoryScreen from '../screens/CategoryScreen'
import CreateAsado from '../screens/CreateAsado'
import SelectGestsScreen from '../screens/SelectGestsScreen'
import SelectUbandScreen from '../screens/SelectUbandScreen'
import Colors from '../constants/Colors'
import SearchResultsScreen from '../screens/SearchResultsScreen'
import SearchedUser from '../screens/SearchedUser'

const Stack = createNativeStackNavigator()

const Navigate = () => {
  return (
    
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name="Home" component={Index} />
            <Stack.Screen name="CreateAsado" component={CreateAsado} options={{title: 'Crear asado: Tipo',animationTypeForReplace: 'pop' ,headerStyle: {backgroundColor: Colors.primary}, headerShadowVisible: false, animation: 'slide_from_right', animationDuration: 3000  }}/>
            <Stack.Screen name="SelectUbicationAndDate" component={SelectUbandScreen} options={{title: 'Crear asado: Lugar', animationTypeForReplace: 'pop',  animation: 'slide_from_right', animationDuration: 3000 }}/>
            <Stack.Screen name="SelectGuests" component={SelectGestsScreen} options={{title: 'Crear asado'}}/>
            <Stack.Screen name="SearchResults" component={SearchResultsScreen} options={{title: 'Resultados'}}/>
            <Stack.Screen name="SearchedUser" component={SearchedUser} options={{title: 'Resultados'}}/>

            <Stack.Screen name="Productos" component={CategoryScreen} options={({ route }) => ({title: route.params.CategoryName})} />
            <Stack.Screen name="Product" component={ProductDetail} options={({ route }) => ({title: route.params.productName})} />
        </Stack.Navigator>
  )
}

export default Navigate

const styles = StyleSheet.create({

})