import { Button, TouchableOpacity,  Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '../screens/Index'

import CreateAsado from '../screens/CreateAsado'
import SelectGestsScreen from '../screens/SelectGestsScreen'
import SelectUbandScreen from '../screens/SelectUbandScreen'
import Colors from '../constants/Colors'
import SearchResultsScreen from '../screens/SearchResultsScreen'
import SearchedUser from '../screens/SearchedUser'
import SelectOrder from '../screens/SelectOrder'
import CategoryScreen from '../screens/CategoryScreen'
import { useSelector } from 'react-redux'
import { Image } from 'react-native-elements'
import { heightPixel, widthPixel } from '../../utils/normalize'

const Stack = createNativeStackNavigator()

const Navigate = ({navigation}) => {
  const theme = useSelector(state=>state.theme)
  const auth = useSelector(state=>state.auth)
  const imagen = auth.Profile.OptionImage
  return (
    <View style={styles.Container} >
        <Stack.Navigator initialRouteName="Asa2" >
            <Stack.Screen name="Asa2" component={Index} options={{headerShown:false}}/>
            <Stack.Screen name="CreateAsado" component={CreateAsado} options={{headerShown:false}}/>
            <Stack.Screen name="SelectUbicationAndDate" component={SelectUbandScreen} options={{headerShown:false}}/>
            <Stack.Screen name="SelectGuests" component={SelectGestsScreen} options={{headerShown:false}}/>
            <Stack.Screen name="SearchResults" component={SearchResultsScreen} options={{headerShown:false}}/>
            <Stack.Screen name="SearchedUser" component={SearchedUser} options={{headerShown:false}}/>
            <Stack.Screen name="SelectOrder" component={SelectOrder} options={{headerShown:false}}/>
            <Stack.Screen name="Category" component={CategoryScreen} options={{headerShown:false}}/>
            <Stack.Screen name="ProductScreen" component={CategoryScreen} options={{headerShown:false}}/>

        </Stack.Navigator>
        </View>
  )
}

export default Navigate

const styles = StyleSheet.create({
  Logo:{
    width: widthPixel(90),
    height: widthPixel(40),
  },
  Imagen:{
    width: widthPixel(50),
    height: heightPixel(50),
    borderRadius:50
  },
  Container:{
    height: '100%',
    width:'100%',
    
  }
})