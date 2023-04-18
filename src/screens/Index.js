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
import { fontPixel, heightPixel } from '../../utils/normalize'

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
    <KeyboardAvoidingView>
      <View onLayout={handleSelect} style={styles.screen}>
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
        <Button title='Hola' onPress={() => handleSelect()} />
      </View>
    </KeyboardAvoidingView>
  )

}

export default Index

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: 'white',
    padding: '3%'
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