import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list';
import GridItem from '../GridItem';
import { CATEGORY } from '../../../data/category';

const Index = ( { navigation }) => {
  const handleSelectedCategory = (item) => {
    navigation.navigate('Productos', {
      CategoryId: item.id,
      CategoryName: item.titulo
    })
  }
  const renderGridItem = ({ item }) => (<GridItem item={item} onSelected={handleSelectedCategory}/>)

    return (
      <FlatList style={styles.screen} data={CATEGORY} keyExtractor={item => item.id} renderItem={renderGridItem} numColumns={2} />
    )
  
  }

export default Index

const styles = StyleSheet.create({
    titulo:{
        fontSize: 30,
        margin: 10
    },  
    screen: {
      height: '70%',
    }

})