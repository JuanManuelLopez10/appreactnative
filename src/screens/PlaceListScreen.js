import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import PlaceItem from '../components/PlaceItem'

const PlaceListScreen = ({navigation}) => {
    const places = useSelector(state => state.places.places)
    const renderPlaceItem = (data) => {
      console.log('LA IMAGEN ES ' + data.item.image);
      return(
      <PlaceItem title={data.item.title} image={data.item.image} address={data.item.address} onSelect={() => navigation.navigate('Detalle')}/>
      )
    }

  
    return (
      <FlatList style={{flex:1}} data={places} keyExtractor={item => item.id} renderItem={renderPlaceItem}/>)
}

export default PlaceListScreen

const styles = StyleSheet.create({})