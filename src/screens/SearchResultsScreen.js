import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList } from 'react-native'
import { useState } from 'react'
import { selectusersearched } from '../store/actions/users.actions'

const SearchResultsScreen = ({navigation}) => {
    const results = useSelector(state => state.users.results)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(null)


    const handleSelect = (user) => {
        setSelected(user)
        dispatch(selectusersearched(user))
        navigation.navigate('SearchedUser')
    } 
    const renderItem = ({ item }) => (
        <TextInput item={item} onSelect={handleSelect} useFor='Searched'/>
      )

    return (
    <View>
        <FlatList data={results} keyExtractor={item=>item.id} renderItem={renderItem}/>
    </View>
  )
}

export default SearchResultsScreen

const styles = StyleSheet.create({})

