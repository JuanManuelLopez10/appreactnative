import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import GridItem from '../components/GridItem';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchimagenes, getusers, searchusers } from '../store/actions/users.actions';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CATEGORIES } from '../../data/Categories';
import { ScrollView } from 'react-native';
import { PRODUCTS } from '../../data/Products';


const Index = ({ navigation }) => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
  const [UserAsado, setUserAsado] = useState([])
  const [categories, setCategories] = useState([])

  const [Search, setSearch] = useState('')
  const handleSelect = () => {
    dispatch(getusers())
  }

  const asados = () => {
    if (user.asado) {
      setUserAsado(user.asado)
    }
  }
  asados()
  const OnChangeSearchBarText = (search) => {
    setSearch(search)
  }
  const SearchResult = () => {
    dispatch(searchusers(Search, user))
    navigation.navigate('SearchResults')
  }

  return (
    <LinearGradient colors={[Colors.darkBackground, Colors.darksecondaryBackground]} start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }} onLayout={handleSelect} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
      <SafeAreaView />
      <ScrollView contentContainerStyle={{ width: widthPixel(400), display: 'flex', alignItems: 'center' }} >

        <View style={styles.Header}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Cuenta')
          }}>
            <Image style={styles.ProfileImage} source={{ uri: user.Profile.OptionImage }} />
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%', height: heightPixel(110), display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: widthPixel(15) }}>
          <Text style={{ color: 'white', fontSize: fontPixel(20) }}>Bienvenido</Text>
          <Text style={{ color: 'white', fontSize: fontPixel(40) }}>Hola {user.Name}</Text>
        </View>


        <LinearGradient colors={[Colors.darkBackground, Colors.darkthirdBackground]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} onLayout={handleSelect} style={styles.AsadosStatus}>

          <View style={styles.AsadosStatusButton}>
            <View style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Ionicons name='calendar' size={fontPixel(25)} color={'grey'} />
            </View>


            {
              UserAsado.length > 0
                ?
                  <LinearGradient colors={[Colors.primary, Colors.darkBackground]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} onLayout={handleSelect} style={styles.AsadosStatusButtonPressable}>
                <TouchableOpacity style={{height:'100%', width:'100%'}} onPress={() => { navigation.navigate('CreateAsado') }}>

                    <Text style={styles.AsadosStatusButtonPressableText}>{UserAsado.length}</Text>
                    </TouchableOpacity>
                  </LinearGradient>

                :
                  <LinearGradient colors={[Colors.primary, Colors.darkBackground]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} onLayout={handleSelect} style={styles.AsadosStatusButtonPressable}>
                <TouchableOpacity onPress={() => { navigation.navigate('CreateAsado') }}>

                    <Text style={styles.AsadosStatusButtonPressableText}>+</Text>
                    </TouchableOpacity>
                  </LinearGradient>

            }


            <View style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
              <Ionicons name='people' size={fontPixel(25)} color={'grey'} />
            </View>
          </View>
          <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: heightPixel(5) }} >
            <Text style={{ color: 'white', fontSize: fontPixel(21) }} >{
              UserAsado.length > 0
                ? `Tienes ${UserAsado.length}`
                : 'No hay asados programados'
            }</Text>
          </View>
        </LinearGradient>
        <View style={{ marginTop: heightPixel(40), height:heightPixel(400), width:'100%', margin:0 }} >
          <Text style={{fontSize:fontPixel(25),marginLeft:widthPixel(20), color:'white'}} >Destacados</Text>
          <ScrollView horizontal={true}  style={{display: 'flex', flexDirection:'row'}}>
          {
            PRODUCTS.map(item => {
              if (item.main===true){
                return(
                  
                <TouchableOpacity key={item.title} style={[styles.category, {shadowColor:'black'}]}>
                  <LinearGradient colors={[Colors.darkthirdBackground, Colors.darksecondaryBackground]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={[styles.category, {marginVertical:0, paddingTop:heightPixel(20)}]}>
                <Image style={styles.categoryImage} source={{ uri: item.image }} />
              <Text style={{color:'white', fontSize:fontPixel(15)}}>{item.title}</Text>
              </LinearGradient>
          </TouchableOpacity>
            )}
          })
          }

          </ScrollView>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Index

const styles = StyleSheet.create({

  ProfileImage: {
    height: heightPixel(50),
    width: heightPixel(50),
    marginRight: widthPixel(20),
    borderRadius: 100,
    borderColor: Colors.primary,
    borderWidth: 2
  },
  Header: {
    width: '100%',
    height: heightPixel(70),
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
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