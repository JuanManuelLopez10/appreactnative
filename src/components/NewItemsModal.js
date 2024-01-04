import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { heightPixel } from '../../utils/normalize'

const NewItemsModal = (props) => {
    const packs = useSelector(state => state.packs).packs
    const gifts = useSelector(state => state.gifts).gifts           // --------------------NO ESTÁN TENIENDO EN CUENTA EL PACK
    const app = useSelector(state => state.app)
    
    console.log(app);
    const giftlengthplusone = gifts.length + 1
    const primero = Math.floor(Math.random() * giftlengthplusone)
    const segundo = Math.floor(Math.random() * giftlengthplusone)
    const tercero = Math.floor(Math.random() * giftlengthplusone)
    const cuarto = Math.floor(Math.random() * giftlengthplusone)
    

    const arrayOfGifts = []
    const pushToArray = () => {
        const primer = gifts[primero]
        const segund = gifts[segundo]
        const tercer = gifts[tercero]
        const cuart = gifts[cuarto]
        arrayOfGifts.push(primer)
        arrayOfGifts.push(segund)
        arrayOfGifts.push(tercer)
        arrayOfGifts.push(cuart)
    }
    pushToArray()
    return (
    <View style={styles.NewItemsModal}>

    </View>
  )
}

export default NewItemsModal

const styles = StyleSheet.create({
    NewItemsModal:{
        width:'90%',
        height: heightPixel(100),
        backgroundColor:'red',
        position:'absolute',
        left:'10%'
    }
})