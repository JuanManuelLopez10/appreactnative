import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
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
        height: Dimensions.get('window').height / 4 * 1,
        padding: 10,
        margin: 10
    }
})