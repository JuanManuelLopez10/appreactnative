import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

    const GiftCardSelect = ({pack}) => {
        const dispatch = useDispatch()
        const selecttGift = (gift) => {
            dispatch(selectGift(gift))
        }
    
        if (pack.style==='christmas') {
            const imagen = pack.image
            return(
            <>
                    <TouchableOpacity style={styles.Touch} onPress={()=>{selecttGift(pack)}} >
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
            if(pack.value==='bronze'){
                if (pack.style==='simple') {
                    const imagen = pack.image
                    return(
                    <>
                    <TouchableOpacity style={styles.Touch} onPress={()=>{selecttGift(pack)}} >
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
    
    export default GiftCardSelect
    
    const styles = StyleSheet.create({
        Image:{
            height:heightPixel(450),
            width:heightPixel(350)
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