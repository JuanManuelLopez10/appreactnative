import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PacksHeader from '../components/PacksHeader'
import { useDispatch, useSelector } from 'react-redux'
import MyPacks from '../components/MyPacks'
import { changePage, changeTaskOption, openPacks } from '../store/actions/app.actions'
import { useState } from 'react'
import { getItems, openPack } from '../store/actions/auth.actions'
import Colors from '../constants/Colors'
import { ImageBackground } from 'react-native'
import { heightPixel } from '../../utils/normalize'

const PacksScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [opened, setOpened] = useState(undefined)

    const gifts = useSelector(state => state.gifts).gifts
    const user = useSelector(state => state.auth)
    const packs = useSelector(state => state.packs).packs

    
    let pack
    
    let arraydisponibles = []
    let regalos = undefined


    const go = (a , b) => {
        console.log(a , ' ', b);
        setOpened(a)
        packs.map(item => {
            if (item.id === a) {
                console.log(item);
                pack = item
            }
        })
        const arrayofGiftsWithSameValueSimple = []
        const arrayofGiftsWithSameValueSpecials = []

        gifts.map(item => {
            if(item){
                if (item.value === pack.type && item.style==='simple') {
                    console.log(item.name);
                    arrayofGiftsWithSameValueSimple.push(item)
                } else if (item.value === pack.type && item.style!=='simple') {
                    console.log(item.name);
                    arrayofGiftsWithSameValueSpecials.push(item)
                }
            }

        })
        const generarNumerosAleatorios = () => {
            const numerosAleatorios = Array.from({ length: pack.quantity-pack.specials }, () => arrayofGiftsWithSameValueSimple[Math.floor(Math.random() * arrayofGiftsWithSameValueSimple.length)]);
            console.log(arrayofGiftsWithSameValueSpecials);
            numerosAleatorios.push(arrayofGiftsWithSameValueSpecials[Math.floor(Math.random() * arrayofGiftsWithSameValueSpecials.length)])
            regalos = numerosAleatorios
            // dispatch(getItems(user.email, numerosAleatorios))
          }
    generarNumerosAleatorios()
        navigation.navigate('Mis items')
        dispatch(openPacks(regalos))
    dispatch(openPack(user.email, b, regalos))    

    }

    const app = useSelector(state => state.app)
    return (
    <ImageBackground source={require('../../assets/coso2.jpg')} style={{ flex: 1 }}>

    <View style={styles.Screen}>
        
        <MyPacks go={go} />
    </View>
    </ImageBackground>
  )
}

export default PacksScreen

const styles = StyleSheet.create({
    Screen:{
        width:'100%',
        height:heightPixel(900),
        paddingBottom:heightPixel(20)
    }
})