import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, TextInput  } from 'react-native'
import React, { useEffect } from 'react'
import GridItem from '../components/GridItem';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchimagenes, getusers, searchusers } from '../store/actions/users.actions';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { Image } from 'react-native';

const Index = ({ navigation }) => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)
  const theme = useSelector(state => state.theme)
  useEffect(()=>{
    console.log(theme);
  })
  const [Search, setSearch] = useState('')
  const handleSelect = () => {
    dispatch(getusers())
  }
    
  const OnChangeSearchBarText = (search) => {
    setSearch(search)
  }
  const SearchResult = () => {
    dispatch(searchusers(Search, user))
    navigation.navigate('SearchResults')
  }
  return (
      <View onLayout={handleSelect} style={{padding: widthPixel(5), backgroundColor: theme.Mode==='Light' ? Colors.lightBackground : Colors.darkBackground, height: '100%', display:'flex', alignItems: 'center'}}>
                <View style={styles.SearchInput}>
            <TextInput placeholder='Buscar' style={styles.searchInput} onChangeText={OnChangeSearchBarText}/>
            <TouchableOpacity style={styles.ButtonSearch} onPress={SearchResult}>
              <Ionicons size={fontPixel(25)} style={styles.ButtonSearchText} name='md-search' />
            </TouchableOpacity>
          </View>

        <View style={styles.CreatAsadoView}>
          <Text style={styles.CreateAsadoTitle} >Organizá tu asado</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('CreateAsado')}}>
            <Ionicons  style={styles.CreateAsadoButton} name='add-circle' size={fontPixel(40)}/>
          </TouchableOpacity>
        </View>

      </View>
  )

}

export default Index

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: 'white',
    padding: '3%',
    overflow: 'scroll'
  },
  Logo: {
    height: heightPixel(200),
    width: widthPixel(200),
    alignSelf: 'center',
    marginTop: heightPixel(50)
  },
  CreatAsadoView: {
    height: heightPixel(200),
    paddingTop: heightPixel(85)
  },
  CreateAsadoTitle: {
    color: Colors.primary,
    fontSize: fontPixel(35),
    fontWeight: 600,
    alignSelf: 'center',
  },
  CreateAsadoButton: {
    alignSelf: 'center',
    marginTop: heightPixel(10),
    color: Colors.primary
  },

  ButtonSearch: {
    backgroundColor: Colors.primary,
    width: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ButtonSearchText: {
    color: Colors.light
  },
  SearchView: {
    height: heightPixel(200),
    display: 'flex',
    justifyContent: 'flex-end'
  },
  SearchTitle: {
    color: Colors.primary,
    fontSize: fontPixel(40),
    fontWeight: 600,
    marginBottom: heightPixel(45)
  },
  SearchInput: {
    width: '80%',
    backgroundColor: Colors.darkBackground,
    borderColor: Colors.primary,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  searchInput : {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '85%',
    height: heightPixel(45),
    margin: 5
  }

})