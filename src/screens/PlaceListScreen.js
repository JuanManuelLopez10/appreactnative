import { FlatList, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PlaceItem from '../components/PlaceItem'
import * as addressAction from '../store/actions/place.actions'

const PlaceListScreen = ({navigation}) => {
    const dispatch = useDispatch()  
    const places = useSelector(state => state.places.places)

    useEffect(()=>{
      dispatch(addressAction.loadAddress())
    }, [])
    const renderPlaceItem = (data) => {
      console.log('LA IMAGEN ES ' + data.item.image);
      return(
      <PlaceItem title={data.item.title} image={data.item.image} onSelect={() => navigation.navigate('Detalle')}/>
      )
    }

  
    return (
      <FlatList style={{flex:1}} data={places} keyExtractor={item => item.id} renderItem={renderPlaceItem}/>)
}

export default PlaceListScreen

const styles = StyleSheet.create({})