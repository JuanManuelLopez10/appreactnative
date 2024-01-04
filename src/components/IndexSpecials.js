import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { useSelector } from 'react-redux'
import GiftCardSpec from './GiftCardSpec'

const IndexSpecials = () => {
  const gifts = useSelector(state => state.gifts).gifts
const estilo = {
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
}
  const arrayofSpecials = []
  gifts.map(item => {
    if (item) {
      if (item.style==='christmas') {
        arrayofSpecials.push(item)
      }
    }

  })
  
  arrayofSpecials.sort((a, b) => b.overall - a.overall)

  return (
    <View style={styles.IndexSpecials}>

      <View style={styles.IndexSpecialsView}>
      <ImageBackground source={require('../../assets/options-back.jpg')} style={{ width:'100%', height:'100%', overflow:'hidden' }}>

        <Text style={styles.IndexSpecialsViewTitle}>Especiales de temporada</Text>
        <View style={{display:'flex', flexDirection:'row'}} >
        {
          arrayofSpecials.map(item => {
            if (arrayofSpecials.findIndex(it => it === item) <5) {
              return(
                <GiftCardSpec pack={item} style={estilo} />
              )
            }

          })
        }
        </View>
        </ImageBackground>

      </View>
    </View>
  )
}

export default IndexSpecials

const styles = StyleSheet.create({
    IndexSpecials:{
        width:'100%',
        height:heightPixel(320),
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'5%'
    },
    IndexSpecialsView:{
        width:'100%',
        height:'100%',
        overflow:'hidden',
        borderRadius: widthPixel(15),
        shadowColor: "#000",
        padding:'2%',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    IndexSpecialsViewTitle:{
        fontSize:fontPixel(18),
        color:'white',

    }
})