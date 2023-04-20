import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../store/actions/category.action';
import { useState } from 'react';
import { getusers, searchusers } from '../store/actions/users.actions';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { Image } from 'react-native';
import { ScrollView } from 'react-native';

const Index = ({ navigation }) => {

  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()

  const [Search, setSearch] = useState('')
  const handleSelect = () => {
    dispatch(getusers())
  }
  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id))
    navigation.push('Productos', {
      CategoryName: item.titulo,
      CategoryId: item.id
    })
  }
  const OnChangeSearchBarText = (search) => {
    setSearch(search)
  }
  const SearchResult = () => {
    dispatch(searchusers(Search))
  }

  const renderGridItem = ({ item }) => (<GridItem item={item} onSelected={handleSelectedCategory} />)

  return (
      <View onLayout={handleSelect} style={styles.screen}>
      <Image style={styles.Logo} src={'https://previews.123rf.com/images/vladischern/vladischern1804/vladischern180400001/98715833-alimentos-carne-filete-asado-a-la-parrilla-dibujado-a-mano-ilustraci%C3%B3n-vectorial-dibujo-realista.jpg'}/>
        <View style={styles.CreatAsadoView}>
          <Text style={styles.CreateAsadoTitle} >Organizá tu asado</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('CreateAsado')}}>
            <Ionicons  style={styles.CreateAsadoButton} name='add-circle' size={fontPixel(40)}/>
          </TouchableOpacity>
        </View>
        <View style={styles.SearchView}>
          <Text  style={styles.SearchTitle}>Buscar Amigos</Text>
          <View style={styles.SearchInput}>
            <SearchBar
              value={Search}
              onChangeText={OnChangeSearchBarText}
              containerStyle={{ backgroundColor: 'white', width: '80%', padding: 0, borderTopWidth: 0, borderBottomWidth: 0 }}
              inputContainerStyle={{ backgroundColor: Colors.light }}
              inputStyle={{ color: Colors.dark }}
              clearIcon={{ color: "#A6432D" }}
              placeholder='Buscar' />
            <TouchableOpacity style={styles.ButtonSearch} onPress={() => { SearchResult() }}>
              <Ionicons size={fontPixel(25)} style={styles.ButtonSearchText} name='md-search' />
            </TouchableOpacity>
          </View>

        </View>
        <FlatList style={styles.screen} data={categories} keyExtractor={item => item.id} renderItem={renderGridItem} numColumns={2} />
      </View>
  )

}

export default Index

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: 'white',
    padding: '3%'
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
  SearchInput: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
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
    height: '40%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  SearchTitle: {
    color: Colors.primary,
    fontSize: fontPixel(40),
    fontWeight: 600,
    marginBottom: heightPixel(45)
  }

})