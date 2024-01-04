import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { fontPixel, heightPixel } from '../../utils/normalize'
import { TouchableOpacity } from 'react-native'

const GiftCardSpec = ({pack, style}) => {
    if (pack.style==='christmas') {
        const imagen = pack.image
        return(
        <>
        <TouchableOpacity style={style.Touch}>
        <Image style={style.Image} source={require('../../assets/christmas.png')} />
        <View style={style.View}>
            <Text style={style.Overall}>{pack.overall}</Text>
            <Image style={style.Imagen} source={{uri: imagen,}} />
            <Text style={style.Name}>{pack.name}</Text>
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
                <TouchableOpacity style={style.Touch}>
                <Image style={style.Image} source={require('../../assets/bronze-simple.png')} />
                <View style={style.View}>
                    <Text style={style.Overall}>{pack.overall}</Text>
                    <Image style={style.Imagen} source={{uri: imagen,}} />
                    <Text style={style.Name}>{pack.name}</Text>
                </View>
                </TouchableOpacity>
                </>
                
                )
            }else{
                const imagen = pack.image
                return(
                <>
                <TouchableOpacity style={style.Touch}>
                <Image style={style.Image} source={require('../../assets/bronze-special.png')} />
                <View style={style.View}>
                    <Text style={style.Overall}>{pack.overall}</Text>
                    <Image style={style.Imagen} source={{uri: imagen,}} />
                    <Text style={style.Name}>{pack.name}</Text>
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
                <TouchableOpacity style={style.Touch}>
                <Image style={style.Image} source={require('../../assets/silver-simple.png')} />
                <View style={style.View}>
                    <Text style={style.Overall}>{pack.overall}</Text>
                    <Image style={style.Imagen} source={{uri: imagen,}} />
                    <Text style={style.Name}>{pack.name}</Text>
                </View>
                </TouchableOpacity>
                </>
                
                )
            }else{
                const imagen = pack.image
                return(
                <>
                <TouchableOpacity style={style.Touch}>
                <Image style={style.Image} source={require('../../assets/silver-special.png')} />
                <View style={style.View}>
                    <Text style={style.Overall}>{pack.overall}</Text>
                    <Image style={style.Imagen} source={{uri: imagen,}} />
                    <Text style={style.Name}>{pack.name}</Text>
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
                <TouchableOpacity style={style.Touch}>
                <Image style={style.Image} source={require('../../assets/gold-simple.png')} />
                <View style={style.View}>
                    <Text style={style.Overall}>{pack.overall}</Text>
                    <Image style={style.Imagen} source={{uri: imagen,}} />
                    <Text style={style.Name}>{pack.name}</Text>
                </View>
                </TouchableOpacity>
                </>
                
                )
    
            }else{
                const imagen = pack.image
                return(
                <>
                <TouchableOpacity style={style.Touch}>
                <Image style={style.Image} source={require('../../assets/gold-special.png')} />
                <View style={style.View}>
                    <Text style={style.Overall}>{pack.overall}</Text>
                    <Image style={style.Imagen} source={{uri: imagen,}} />
                    <Text style={style.Name}>{pack.name}</Text>
                </View>
                </TouchableOpacity>
                </>
                
                )
            }
        }
    
    }

}

export default GiftCardSpec

const styles = StyleSheet.create({
    Image:{
        height:heightPixel(200),
        width:heightPixel(120),
    },
    View:{
        position:'absolute',
        left:'10%',
        top:'20%',
        // backgroundColor:'blue',
        width:'80%',
        height:'40%',
        display:'flex',
    },
    Touch:{
        position:'relative'
    },
    Overall:{
        fontSize:fontPixel(10),
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
        fontSize:fontPixel(10)
    }
})