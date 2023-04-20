import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import { heightPixel } from '../../utils/normalize'

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
        if(selectedLoc){
            navigation.navigate('Nuevo', {mapLocation:selectedLoc})
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
    <MapView style={styles.mapa} initialRegion={initialRegion} onPress={selectLocation}>
        {selectedLoc && <Marker title='Ubicacion' coordinate={{latitude: selectedLoc.lat, longitude: selectedLoc.lng}}/>}
    </MapView>
  )
}

export default MapScreen

const styles = StyleSheet.create({
    mapa: {
        height: '100%',
        width: '100%'
    }
})