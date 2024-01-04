import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'

const BuyPacksScreen = ({navigation}) => {
    const packs = useSelector(state => state.packs).packs
  return (
    <ImageBackground source={require('../../assets/coso2.jpg')} style={{ flex: 1 }}>
        {
            packs.map(pack => {
                return(
                    <View>
                        <Text>{pack.title}</Text>
                    </View>
                )
            })
        }
    <View>
      <Text>BuyPacksScreen</Text>
    </View>
    </ImageBackground>
  )
}

export default BuyPacksScreen

const styles = StyleSheet.create({})