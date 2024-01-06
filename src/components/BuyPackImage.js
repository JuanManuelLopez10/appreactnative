import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { widthPixel } from '../../utils/normalize'

const BuyPackImage = (pack) => {
    let paquete = pack.pack
    if (paquete.type==='bronze') {
        return(
            <Image style={styles.Image} source={require('../../assets/bronze-pack.png')} />
        )
    } else if (paquete.type==='bronze') {
        return(
            <Image style={styles.Image} source={require('../../assets/silver-pack.png')} />
        )
    }else{
        return(
            <Image style={styles.Image} source={require('../../assets/gold-pack.png')} />
        )
    }
}

export default BuyPackImage

const styles = StyleSheet.create({
    Image:{
        width:widthPixel(200),
        height:widthPixel(200),
    }
})