import { StyleSheet, Text, Pressable, FlatList } from 'react-native'
import React from 'react'

const ListaItems = (props) => {
  return (
    <FlatList
    data={props.items}
    renderItem={(itemData) => {
      return(
      <Pressable
      onPress={() =>{props.selectItem(itemData.item)}}>
        <Text>{itemData.item.nombre}</Text>
        <Text>{itemData.item.lleva}</Text>
      </Pressable>
      )
    }}
    />
  )
}

export default ListaItems

const styles = StyleSheet.create({})