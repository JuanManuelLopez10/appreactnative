import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GiftCardSpec from './GiftCardSpec'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { sellGift } from '../store/actions/auth.actions'
import { selectGift } from '../store/actions/app.actions'

const GiftOptions = () => {
    const dispatch = useDispatch()
    const app = useSelector(state => state.app)
    const user = useSelector(state => state.auth)

    const close = () => {
        dispatch(selectGift(undefined))
    }
    const sell = () => {
        dispatch(sellGift(app.giftSelected, user.email))
        dispatch(selectGift(undefined))
    }
    const useGift = () => {
        dispatch(useGift(app.giftSelected, user.email))
        dispatch(selectGift(undefined))
    }
    const estilo = {
        Image:{
            height:heightPixel(350),
            width:heightPixel(300),
        },
        View:{
            position:'absolute',
            left:'10%',
            top:'5%',
            width:heightPixel(240),
            alignItems:'center',
            height:'40%',
            display:'flex',
        },
        Touch:{
            position:'relative',
            width:heightPixel(300)
        },
        Overall:{
            fontSize:fontPixel(40),
            marginTop:15,
            marginLeft:'10%',
            alignSelf:'flex-start',
            color:'white'
        },
        Imagen:{
            width:widthPixel(120),
            height:heightPixel(200),
        },
        Name:{
            textAlign:'center',
            marginTop:'-3%',
            color:'white',
            width:'100%',
            alignSelf:'center',
            fontSize:fontPixel(0)
        }
    }
    console.log(app.giftSelected);
  return (
    <View style={styles.GiftOptions}>
        <View style={styles.Header}>
            <TouchableOpacity onPress={()=>{close()}}>
                <Ionicons name={'arrow-back'} size={fontPixel(30)} color={'white'}/>
            </TouchableOpacity>
            <Text style={{color:'white', fontSize:fontPixel(20)}} >{app.giftSelected.name}</Text>
            <Ionicons name={'arrow-back'} size={fontPixel(40)}/>
        </View>
        <View  style={styles.ImageContainer}>
        <GiftCardSpec pack={app.giftSelected} style={estilo}/>

        </View>
        <View style={styles.OptionsView}>
            <TouchableOpacity style={styles.TouchoPTION} onPress={()=>{sell()}} >
                <Text style={{color:'white', fontSize:fontPixel(18)}}>Vender artículo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchoPTION} onPress={()=>{sell()}} >
                <Text style={{color:'white', fontSize:fontPixel(18)}}>Usar artículo</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default GiftOptions

const styles = StyleSheet.create({
    ImageContainer:{
        alignSelf:'center'
    },
    OptionsView:{
        width:'100%',
        borderTopColor:'white',
        borderTopWidth:1
    },
    Header:{
        paddingTop:'1%',
        height:heightPixel(50),
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    GiftOptions:{
        position:'absolute',
        left:'0%',
        height:heightPixel(700),
        width:widthPixel(390),
        backgroundColor:'rgba(0, 0, 0, 0.7)',
        zIndex:50
    },
    TouchoPTION:{
        width:'100%',
        height:heightPixel(60),
        display:'flex',
        justifyContent:'center',
        paddingLeft:'3%',
        borderTopColor:'white',
        borderTopWidth:1
    }
})