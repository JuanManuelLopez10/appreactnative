import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { heightPixel } from '../../utils/normalize'

const PackImage = (props) => {
    if (props.type==='bronze') {
        return (
            <Image style={styles.Image} source={require('../../assets/bronze-pack.png')} />
              
          ) 
    }else if(props.type==='silver'){
        return (
            <Image style={styles.Image} source={require('../../assets/silver-pack.png')} />
              
          )
    }else{
        return (
            <Image style={styles.Image} source={require('../../assets/gold-pack.png')} />
              
          )
    }


}

export default PackImage

const styles = StyleSheet.create({
    Image:{
        height:heightPixel(200),
        width:heightPixel(200),
        alignSelf:'center'
    }
})