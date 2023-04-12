import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Location from 'expo-location'
import Colors from '../constants/Colors'
import MapPreview from './MapPreview'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect } from 'react'

const LocationService = ({onLocation}) => {
    const navigation = useNavigation
    const route = useRoute()
    const mapLocation = route.params?.mapLocation
    const [location, setLocation] = useState(null)
    
    useEffect(() => {
        if(mapLocation){
            setLocation(mapLocation)
            onLocation(mapLocation.lat, mapLocation.lng)
        }
    }, [mapLocation])

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
    const handlePickonMap = async () => {
        const hasPermission = await verifyPermissions()
        if(!hasPermission) return
        navigation.navigate('Map')
    }
    return (
    <View>
        <MapPreview style={styles.mapa} location={location}>
        <Text>Esperando ubicación...</Text>
        </MapPreview>
        <Button title='obtener desde el mapa' onPress={handlePickonMap}/>
      <Button title='obtener ubicación' onPress={handleLocation}/>
    </View>
  )
}

export default LocationService

const styles = StyleSheet.create({
    mapa: {
        width: 100,
        height: 100
    }
})