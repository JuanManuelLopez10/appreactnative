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
import { widthPixel } from '../../utils/normalize'

const Stack = createNativeStackNavigator()

const Navigate = ({navigation}) => {
  const theme = useSelector(state=>state.theme)
  const auth = useSelector(state=>state.auth)
  
  return (
    
        <Stack.Navigator initialRouteName="Asa2" >
            <Stack.Screen name="Asa2" component={Index} options={{headerShown:true, headerStyle:{backgroundColor: theme.Mode==='Dark' ? Colors.darkBackground : Colors.lightBackground}, headerTitle:()=>(  
                <Image style={styles.Logo} source={theme.Mode==='Dark' ? require(`../../assets/largeDarkicon.png`) : require(`../../assets/largeLighticon.png`)} />
            ), headerRight:()=>(
              <TouchableOpacity onPress={()=>navigation.navigate('Cuenta')}>
                <Text>SSS</Text>
              </TouchableOpacity>
            )}}/>
            <Stack.Screen name="CreateAsado" component={CreateAsado} options={{title: 'Crear asado: Tipo',animationTypeForReplace: 'pop' ,headerStyle: {backgroundColor: Colors.primary}, headerShadowVisible: false, animation: 'slide_from_right', animationDuration: 3000  }}/>
            <Stack.Screen name="SelectUbicationAndDate" component={SelectUbandScreen} options={{title: 'Crear asado: Lugar', animationTypeForReplace: 'pop',  animation: 'slide_from_right', animationDuration: 3000 }}/>
            <Stack.Screen name="SelectGuests" component={SelectGestsScreen} options={{title: 'Crear asado', headerStyle: {backgroundColor: Colors.primary}}}/>
            <Stack.Screen name="SearchResults" component={SearchResultsScreen} options={{title: 'Resultados'}}/>
            <Stack.Screen name="SearchedUser" component={SearchedUser} options={{title: 'Resultados'}}/>
            <Stack.Screen name="SelectOrder" component={SelectOrder} options={{title: 'Pedido por persona', headerStyle: {backgroundColor: Colors.primary}}}/>
            <Stack.Screen name="Category" component={CategoryScreen} options={{title: 'Pedido por persona', headerStyle: {backgroundColor: Colors.primary}}}/>
            <Stack.Screen name="ProductScreen" component={CategoryScreen} options={{title: 'Pedido por persona', headerStyle: {backgroundColor: Colors.primary}}}/>

        </Stack.Navigator>
  )
}

export default Navigate

const styles = StyleSheet.create({
  Logo:{
    width: widthPixel(90),
    height: widthPixel(40),
  }
})