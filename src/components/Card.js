import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({style, children}) => {
  return (
    <View style={[styles.card, style]}>
        {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        margin: 20,
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 12},
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        backgroundColor: 'white',
        maxWidth: 200
    }
})