import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Location from 'expo-location'
import Colors from '../constants/Colors'
import MapPreview from './MapPreview'

const LocationService = ({onLocation}) => {

    const [location, setLocation] = useState(null)
    
    const handleLocation = async () => {
        const hasPermission = await verifyPermissions()
        if(!hasPermission){
            return
        }
        const location = await Location.getCurrentPositionAsync({
            timeout: 5000
        })
        setLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        })
        onLocation(location.coords.latitude, location.coords.longitude)
    }
    const verifyPermissions = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            alert(
                'Permisos insuficientes',
                [{ text: 'Ok' }]
            )
            return false
        }
        return true
    } 
    
    return (
    <View>
        <MapPreview location={location}>
        <Text>Esperando ubicación...</Text>
        </MapPreview>

      <Button title='obtener ubicación' onPress={handleLocation}/>
    </View>
  )
}

export default LocationService

const styles = StyleSheet.create({})