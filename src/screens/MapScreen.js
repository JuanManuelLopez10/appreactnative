import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapViewimport, { Marker } from 'react-native-maps'
import { useState } from 'react'
import { useLayoutEffect } from 'react'

const MapScreen = ({ navigation }) => {
    const initialRegion = {
        latitude: 37.42,
        longitude: -122.08,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.421
    }
    const [selectedLoc, setselectedLoc] = useState()
    const selectLocation = event => {
        setselectedLoc({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    }
    const handsave = () => {
        if(selectLocation){
            navigation.navigate('Nuevo', {mapLocation:selectLocation})
        }
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <Text onPress={handsave}>Guardar</Text>
            )
        })
    }, [navigation, handsave])
  return (
    <MapView initialRegion={initialRegion} provider='google'>
        {selectLocation && <Marker title='Ubicacion' coordinate={{latitude: selectLocation.lat, longitude: selectLocation.lng}}/>}
    </MapView>
  )
}

export default MapScreen

const styles = StyleSheet.create({})