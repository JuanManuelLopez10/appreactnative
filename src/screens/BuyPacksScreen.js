import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ImageBackground } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'react-native-elements'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import BuyPackImage from '../components/BuyPackImage'
import Colors from '../constants/Colors'
import { buyPack } from '../store/actions/auth.actions'

const BuyPacksScreen = ({navigation}) => {
    const packs = useSelector(state => state.packs).packs
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(undefined)
    const seleccionar = (a) => {
        setSelected(a)
    }
    const buy = () => {
        dispatch(buyPack(user.email, selected.id, selected.price))
        setSelected(undefined)

    }
  return (
    <ImageBackground source={require('../../assets/coso2.jpg')}>
        <ScrollView>
        <Text style={styles.Type} >Bronze</Text>
        <ScrollView horizontal contentContainerStyle={styles.Section}>
        {
            packs.map(pack => {
                
                let packe
                if (pack.type==='bronze') {
                    return(
                        <TouchableOpacity onPress={()=>{seleccionar(pack)}} style={styles.PackContainer} >
                            <Image style={styles.Image} source={require('../../assets/bronze-pack.png')} />
                            <Text style={styles.PackTitle} >{pack.title}</Text>
                            <Text style={styles.PackPrice} >${pack.price}</Text>
                        </TouchableOpacity>
                    )
                }

            })
        }
        </ScrollView>
        <Text style={styles.Type} >Plata</Text>

        <ScrollView horizontal contentContainerStyle={styles.Section}>
        {
            packs.map(pack => {
                
                let packe
                if (pack.type==='silver') {
                    return(
                        <TouchableOpacity onPress={()=>{seleccionar(pack)}} style={styles.PackContainer} >
                            <Image style={styles.Image} source={require('../../assets/silver-pack.png')} />
                            <Text style={styles.PackTitle} >{pack.title}</Text>
                            <Text style={styles.PackPrice} >${pack.price}</Text>
                        </TouchableOpacity>
                    )
                }

            })
        }
        </ScrollView>      
        <Text style={styles.Type} >Oro</Text>

        <ScrollView horizontal contentContainerStyle={styles.Section}>
        {
            packs.map(pack => {
                let packe
                if (pack.type==='gold') {
                    return(
                        <TouchableOpacity onPress={()=>{seleccionar(pack)}} style={styles.PackContainer} >
                            <Image style={styles.Image} source={require('../../assets/gold-pack.png')} />
                            <Text style={styles.PackTitle} >{pack.title}</Text>
                            <Text style={styles.PackPrice} >${pack.price}</Text>
                        </TouchableOpacity>
                    )
                }

            })
        }
        </ScrollView>
        </ScrollView>
    <View>
      <Text>BuyPacksScreen</Text>
    </View>
    {
        selected!==undefined
        ?
            <ImageBackground  style={styles.Modal} source={require('../../assets/options-back.jpg')}>

            <View style={styles.ModalHeader}>
            <TouchableOpacity  onPress={()=>{seleccionar(undefined)}}>
                <Text style={styles.CloseBottom} >X</Text>
            </TouchableOpacity>
            </View>
            <BuyPackImage pack={selected} />
            <Text style={styles.Descripcion} >{selected.quantity} items, habiendo {selected.specials} items especiales</Text>
            {
                selected.price>user.money
                ?            <View style={styles.Button} >
                <Text style={styles.ButtonText} >No tenés dinero suficiente </Text>
            </View>
            :            <TouchableOpacity onPress={()=>{buy()}} style={styles.Button} >
            <Text style={styles.ButtonText} >Comprar ahora {'( '}${selected.price}{' )'} </Text>
        </TouchableOpacity>
            }

            </ImageBackground>
        :''
    }
    </ImageBackground>
  )
}

export default BuyPacksScreen

const styles = StyleSheet.create({
    Button:{
        backgroundColor:Colors.primary,
        marginTop:heightPixel(45),
        height:heightPixel(50),
        width:'80%',
        borderRadius:30,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    ButtonText:{
        color:'white',
        fontSize:fontPixel(20)
    },
    Image:{
        width:heightPixel(170),
        height:heightPixel(170),
    },
    Descripcion:{
        color:'white',
        fontSize:fontPixel(23),
        width:'80%',
        textAlign:'center'
    },
    PackTitle:{
        textAlign:'center',
        fontSize:fontPixel(20),
        color:'white',
        fontWeight:'800'
    },
    CloseBottom:{
        fontSize:fontPixel(30),
        color:'white'
    },
    Modal:{
        position:'absolute',
        height:heightPixel(450),
        width:widthPixel(350),
        backgroundColor:'white',
        top:heightPixel(20),
        left:widthPixel(20),
        zIndex:50,
        display:'flex',
        alignItems:'center'
    },
    ModalHeader:{
        width:'100%',
        height:heightPixel(50),
        display:'flex',
        alignItems:'flex-end',
        paddingHorizontal:'5%'
    },
    Type:{
        fontSize:fontPixel(30),
        color:'white',
        marginTop:heightPixel(10),
        marginLeft:widthPixel(10)
    },
    PackContainer:{
        width:widthPixel(230),
        marginHorizontal:widthPixel(10),
        display:'flex',
        alignItems:'center',
        height:heightPixel(250),
    },
    PackPrice:{
        textAlign:'center',
        fontSize:fontPixel(15),
        marginTop:heightPixel(10),
        color:'white'
    },
    Section:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:widthPixel(5),
        height:heightPixel(290),
    }
})