import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchimagenes, getusers, searchusers } from '../store/actions/users.actions';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native';
import { changePage } from '../store/actions/app.actions';
import IndexTwoSections from '../components/IndexTwoSections';
import IndexSpecials from '../components/IndexSpecials';
import { getsubtasks } from '../store/actions/tasks.actions';
import { addSession, getsavedsignin, loadCompletedTasks, reload } from '../store/actions/auth.actions';
import { ImageBackground } from 'react-native';


const Index = ({ navigation }) => {
  const user = useSelector(state => state.auth)
  const packs = useSelector(state => state.packs)
  const gifts = useSelector(state => state.gifts)
  const app = useSelector(state => state.app)
  const tasks = useSelector(state => state.tasks)


  const dispatch = useDispatch()


  return (
    <View onLayout={()=>{
      dispatch(reload(user.email))
    }} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
    <ImageBackground source={require('../../assets/coso2.jpg')} style={{ flex: 1 }}>

      <ScrollView contentContainerStyle={{ width: widthPixel(400), display: 'flex', marginBottom:heightPixel(10)}} >
        <IndexTwoSections navigation={navigation}/>
        <IndexSpecials/>
      </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  HeaderTitle:{
    marginTop:'30%'
  },
  overlayLightDark: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Ajusta el color y la opacidad del sobrefondo aquí
},    
Screen: {
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

},

  AsadosStatus: {
    height: heightPixel(190),
    width: widthPixel(310),
    backgroundColor: Colors.darksecondaryBackground,
    borderRadius: 10,
    marginTop: heightPixel(50),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  AsadosStatusButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50%'
  },
  AsadosStatusButtonPressable: {
    position: 'absolute',
    bottom: heightPixel(50),
    right: widthPixel(130),
    width: widthPixel(55),
    height: widthPixel(65),
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.primary,
    borderWidth: 2,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,

  },
  AsadosStatusButtonPressableText: {
    fontSize: fontPixel(35),
    color: 'white'
  },

  category: {
    width: widthPixel(150),
    height: heightPixel(200),
    marginVertical: heightPixel(10),
    marginHorizontal:widthPixel(10),
    borderRadius: 5,
    backgroundColor: Colors.darkBackground,
    display:'flex',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  categoryImageView: {
    width: widthPixel(100),
    height: heightPixel(150),
  },
  categoryImage: {
    width: widthPixel(100),
    height: heightPixel(100),
    borderRadius:50
  }
})