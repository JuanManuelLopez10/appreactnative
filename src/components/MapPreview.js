import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { STATIC_MAP_API_KEY } from '../constants/database'

const MapPreview = ({location, children}) => {
    const mapPreviewUrl = location ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=13&size=600x300&maptype=roadmap
    &markers=color:red%7Clabel:%7C${location.latitude},${location.longitude}
    &markers=color:red%7Clabel:C%7C40.718217,-73.998284
    &key=${STATIC_MAP_API_KEY}` : ''
    return (
    <View>
        {location
        ? <Image style={styles.mapa} source={{ uri: mapPreviewUrl}}/>
        : (children)
        }
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    mapa: {
        width: 100,
        height: 100
    }
})