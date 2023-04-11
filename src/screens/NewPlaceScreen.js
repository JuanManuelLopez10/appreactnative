import { ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as placeActions from '../store/actions/place.actions'

const NewPlaceScreen = ([navigation]) => {
    const dispatch = useDispatch()
    const [titleValue, setTitleValue] = useState('')
    const titleChangeHandler = text => setTitleValue(text)
    const savePlaceHandler = () => {
        dispatch(placeActions.addPlace(titleValue))
        navigation.goBack()
    }
  return (
    <ScrollView>
        <View>
            <Text>Titulo</Text>
            <TextInput value={titleValue} onChangeText={titleChangeHandler}/>
            <Button title='Guardar' onPress={savePlaceHandler} />
        </View>
    </ScrollView>
  )
}

export default NewPlaceScreen

const styles = StyleSheet.create({})