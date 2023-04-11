import { Platform, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const PlaceListScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Nueva' iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'} onPress={() => navigation.push('Nuevo')}/>
                </HeaderButtons>
        )
    })
  }, [navigation])
  
    return (
    <View>
      <Text>PlaceListScreen</Text>
    </View>
  )
}

export default PlaceListScreen

const styles = StyleSheet.create({})