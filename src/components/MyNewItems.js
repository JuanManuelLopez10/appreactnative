import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native'
import GiftCard from './GiftCard'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { ImageBackground } from 'react-native'
import GiftOptions from './GiftOptions'

const MyNewItems = (props) => {
    const user = useSelector(state => state.auth)
    const app = useSelector(state => state.app)
    
  return (
    <ImageBackground source={require('../../assets/coso2.jpg')} style={{ flex: 1 }}>
    {
            app.giftSelected
            ? <GiftOptions/>
            :   
            <ScrollView horizontal={true} contentContainerStyle={styles.View}>
            {
                user.gifts && user.gifts.length>0
                ?
                user.gifts.map(item=> {
                    return(
                        <GiftCard pack={item}/>
                    )
                })
                :<Text style={styles.No}>
                    No tenés items disponibles
                </Text>
            }
    
        </ScrollView>
    }

</ImageBackground>
  )
}

export default MyNewItems

const styles = StyleSheet.create({
    View:{
        height:heightPixel(700),
        display:'flex',
        flexDirection:'row',
    },
    No:{
        width:widthPixel(390),
        textAlign:'center',
        alignSelf:'center',
        color:'white',
        fontSize:fontPixel(45),
        marginBottom:heightPixel(100)
    }
})