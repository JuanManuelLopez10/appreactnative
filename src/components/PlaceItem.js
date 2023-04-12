import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const PlaceItem = ({ title, image, onSelect, address }) => {
  console.log(image);
  console.log(address);
  return (
    <TouchableOpacity style={styles.PlaceItem} onPress={onSelect}>
        <Image style={styles.image} source={ {uri: image}}/>
        <View>
            <Text>{title}</Text>
            <Text>{address}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default PlaceItem

const styles = StyleSheet.create({
  PlaceItem: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  }
})