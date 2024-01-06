import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { fontPixel } from '../../utils/normalize'

const ImageWithStyle = (props) => {
    const packs = useSelector(state => state.packs)
    if(props.gift.type==='money'){
        return (
            <>
                <View style={styles.Box} >
            <Image style={props.style} source={require('../../assets/coin.png')} />
            <Text style={styles.BoxText} >{props.gift.value}</Text>
            </View>
            </>
          )
    }else if(props.gift.type==='packs'){
        let valor

        let titulo
        packs.packs.map(pack => {
                if (props.gift.value[0].id && pack.id===props.gift.value[0].id) {
                valor= pack.type
                titulo= pack.title

            }
            
        })
        if(valor==='bronze'){

            return (
                <>
                <View style={styles.Box} >
                <Image style={props.style} source={require('../../assets/bronze-pack.png')} />
                <Text style={styles.BoxText} >{titulo}</Text>
                </View>
                </>
              )
        }
    }


}

export default ImageWithStyle

const styles = StyleSheet.create({
    Box:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'70%'
    },
    BoxText:{
        color:'white',
        width:'70%',
        fontSize:fontPixel(18)
    }
})