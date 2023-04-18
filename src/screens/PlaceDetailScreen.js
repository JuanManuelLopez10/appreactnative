import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const PlaceDetailScreen = ({ route }) => {
  const { placeId } = route.params

  const selectedPlace = useSelector(state => state.places.places.find(place => place.id === placeId))

    return (
    <View>
      <Text>{selectedPlace.address}</Text>
      <Text>{selectedPlace.coords.lat}, {selectedPlace.coords.lat}</Text>
      <Text>{selectedPlace.title}</Text>
    </View>
  )
}

export default PlaceDetailScreen

const styles = StyleSheet.create({})