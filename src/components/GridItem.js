import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const GridItem = ({ item, onSelected }) => {
  return (
        <TouchableOpacity style={{...styles.gridItem, backgroundColor: item.color}} onPress={()=>{onSelected(item)}}>
            <View>
                <Text style={styles.titulo}>{item.titulo}</Text>
            </View>
        </TouchableOpacity>
  )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem: {
        height: 50,
        width: '40%',
        padding: 10,
        margin: 10
    }
})