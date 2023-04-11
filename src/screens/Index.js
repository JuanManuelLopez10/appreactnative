import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../store/actions/category.action';

const Index = ( { navigation }) => {
  const categories = useSelector(state => state.categories.categories)
  const dispatch = useDispatch()
  
  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id))
    navigation.push('Productos', {
      CategoryName: item.titulo,
      CategoryId: item.id
    })
  }
  const renderGridItem = ({ item }) => (<GridItem item={item} onSelected={handleSelectedCategory}/>)

    return (
      <View style={styles.screen}>
      <FlatList style={styles.screen} data={categories} keyExtractor={item => item.id} renderItem={renderGridItem} numColumns={2} />        
      </View>
    )
  
  }

export default Index

const styles = StyleSheet.create({
    titulo:{
        fontSize: 30,
        margin: 10
    },  
    screen: {
      height: '100%',
      backgroundColor: 'white',
      padding: '3%'
    }

})