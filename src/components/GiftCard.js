import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { selectGift } from '../store/actions/app.actions'

const GiftCard = ({pack}) => {
    const dispatch = useDispatch()
    const selecttGift = (gift) => {
        dispatch(selectGift(gift))
    }

    if (pack.style==='christmas') {
        const imagen = pack.image
        return(
        <>

                <TouchableOpacity style={styles.Touch} onPress={()=>{selecttGift(pack)}} >
                {
            pack.quantity>=2
            ?<View style={styles.Quantity} >
                <Text style={{color:'white', fontSize:fontPixel(30)}} >x{pack.quantity}</Text>
            </View>
            :''
        }
        <Image style={styles.Image} source={require('../../assets/christmas.png')} />
        <View style={styles.View}>
            <Text style={styles.Overall}>{pack.overall}</Text>
            <Image style={styles.Imagen} source={{uri: imagen,}} />
            <Text style={styles.Name}>{pack.name}</Text>
        </View>
        </TouchableOpacity>
        </>
        
        )
    }else{
        if(pack.value==='bronze'){
            if (pack.style==='simple') {
                const imagen = pack.image
                return(
                <>
                 
                <TouchableOpacity style={styles.Touch} onPress={()=>{selecttGift(pack)}} >
                {
            pack.quantity>=2
            ?<View style={styles.Quantity} >
                <Text style={{color:'white', fontSize:fontPixel(30)}} >x{pack.quantity}</Text>
            </View>
            :''
        }
                <Image style={styles.Image} source={require('../../assets/bronze-simple.png')} />
                <View style={styles.View}>
                    <Text style={styles.Overall}>{pack.overall}</Text>
                    <Image style={styles.Imagen} source={{uri: imagen,}} />
                    <Text style={styles.Name}>{pack.name}</Text>
                </View>
                </TouchableOpacity>
                </>
                
                )
            }else{
                const imagen = pack.image
                return(
                <>

                <TouchableOpacity style={styles.Touch} onPress={()=>{selecttGift(pack)}} >
                {
            pack.quantity>=2
            ?<View style={styles.Quantity} >
                <Text style={{color:'white', fontSize:fontPixel(30)}} >x{pack.quantity}</Text>
            </View>
            :''
        }
                <Image style={styles.Image} source={require('../../assets/bronze-special.png')} />
                <View style={styles.View}>
                    <Text style={styles.Overall}>{pack.overall}</Text>
                    <Image style={styles.Imagen} source={{uri: imagen,}} />
                    <Text style={styles.Name}>{pack.name}</Text>
                </View>
                </TouchableOpacity>
                </>
                
                )
            }
        }else if(pack.value==='silver'){
            if (pack.style==='simple') {
                const imagen = pack.image
                return(
                <>
                <TouchableOpacity style={styles.Touch} onPress={()=>{selecttGift(pack)}} >
                {
            pack.quantity>=2
            ?<View style={styles.Quantity} >
                <Text style={{color:'white', fontSize:fontPixel(30)}} >x{pack.quantity}</Text>
            </View>
            :''
        }
                <Image style={styles.Image} source={require('../../assets/silver-simple.png')} />
                <View style={styles.View}>
                    <Text style={styles.Overall}>{pack.overall}</Text>
                    <Image style={styles.Imagen} source={{uri: imagen,}} />
                    <Text style={styles.Name}>{pack.name}</Text>
                </View>
                </TouchableOpacity>
                </>
                
                )
            }else{
                const imagen = pack.image
                return(
                <>
                <TouchableOpacity style={styles.Touch} onPress={()=>{selecttGift(pack)}} >
                {
            pack.quantity>=2
            ?<View style={styles.Quantity} >
                <Text style={{color:'white', fontSize:fontPixel(30)}} >x{pack.quantity}</Text>
            </View>
            :''
        }
                <Image style={styles.Image} source={require('../../assets/silver-special.png')} />
                <View style={styles.View}>
                    <Text style={styles.Overall}>{pack.overall}</Text>
                    <Image style={styles.Imagen} source={{uri: imagen,}} />
                    <Text style={styles.Name}>{pack.name}</Text>
                </View>
                </TouchableOpacity>
                </>
                
                )
            }
    
        }else if(pack.value==='gold'){
            if (pack.style==='simple') {
                const imagen = pack.image
                return(
                <>
                <TouchableOpacity style={styles.Touch} onPress={()=>{selecttGift(pack)}} >
                {
            pack.quantity>=2
            ?<View style={styles.Quantity} >
                <Text style={{color:'white', fontSize:fontPixel(30)}} >x{pack.quantity}</Text>
            </View>
            :''
        }
                <Image style={styles.Image} source={require('../../assets/gold-simple.png')} />
                <View style={styles.View}>
                    <Text style={styles.Overall}>{pack.overall}</Text>
                    <Image style={styles.Imagen} source={{uri: imagen,}} />
                    <Text style={styles.Name}>{pack.name}</Text>
                </View>
                </TouchableOpacity>
                </>
                
                )
    
            }else{
                const imagen = pack.image
                return(
                <>
                <TouchableOpacity style={styles.Touch} onPress={()=>{selecttGift(pack)}} >
                {
            pack.quantity>=2
            ?<View style={styles.Quantity} >
                <Text style={{color:'white', fontSize:fontPixel(30)}} >x{pack.quantity}</Text>
            </View>
            :''
        }
                <Image style={styles.Image} source={require('../../assets/gold-special.png')} />
                <View style={styles.View}>
                    <Text style={styles.Overall}>{pack.overall}</Text>
                    <Image style={styles.Imagen} source={{uri: imagen,}} />
                    <Text style={styles.Name}>{pack.name}</Text>
                </View>
                </TouchableOpacity>
                </>
                
                )
            }
        }
    
    }

}

export default GiftCard

const styles = StyleSheet.create({
    Image:{
        height:heightPixel(450),
        width:heightPixel(350)
    },
    Quantity:{
        position:'absolute',
        height:'5%',
        paddingRight:'17%',
        alignSelf:'flex-end',
        top:'5%',
        zIndex:50,
        textShadowColor:'black',
        textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
    },
    View:{
        position:'absolute',
        left:'13%',
        top:'9%',
        // backgroundColor:'blue',
        width:'75%',
        height:'33%',
        display:'flex',
    },
    Touch:{
        position:'relative'
    },
    Overall:{
        fontSize:fontPixel(30),
        marginLeft:'5%',
        color:'white'
    },
    Imagen:{
        width:'90%',
        height:'90%',
        alignSelf:'center',
        marginLeft:'5%',
        // marginTop:'%'
    },
    Name:{
        textAlign:'center',
        marginTop:'-3%',
        color:'white',
        width:'80%',
        alignSelf:'center',
        fontSize:fontPixel(25)
    }
})