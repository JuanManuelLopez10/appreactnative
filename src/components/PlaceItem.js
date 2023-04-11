import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const PlaceItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
        <Image source={{ url: props.image}}/>
        <View>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PlaceItem

const styles = StyleSheet.create({})