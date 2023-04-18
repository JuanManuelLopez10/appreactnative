import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ImageSelector from '../components/ImageSelector'
import { SafeAreaView } from 'react-native-safe-area-context'

const AcountScreen = () => {

    return(
        <>
        <SafeAreaView/>
        <View style={styles.Screen}>
            <ImageSelector/>
            <TextInput placeholder='Nombre'/>
        </View>
        </>
  )
}

export default AcountScreen

const styles = StyleSheet.create({
    Screen: {
        display: 'flex',
        alignItems: 'center'
    }
})