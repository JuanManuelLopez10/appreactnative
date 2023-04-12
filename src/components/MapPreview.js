import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import { STATIC_MAP_API_KEY_URL } from '../constants/database'

const MapPreview = ({location}) => {
    const mapPreviewUrl = location ? `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${location.lat},${location.lng}
    &markers=color:red%7Clabel:C%7C40.718217,-73.998284
    &key=${STATIC_MAP_API_KEY}` : ''
    return (
    <View>
        {location
        ? <Image source={{ uri: mapPreviewUrl}}/>
        : (children)
        }
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({})