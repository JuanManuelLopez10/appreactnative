import { ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as placeActions from '../store/actions/place.actions'
import ImageSelector from '../components/ImageSelector'
import LocationService from '../components/LocationService'

const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [titleValue, setTitleValue] = useState('')
    const [selectImage, setSelectImage] = useState('')
    const [locationValue, setlocationValue] = useState()
    
    const handleSave = () => {
        dispatch(placeActions.addPlace(titleValue, selectImage, locationValue))
        navigation.goBack()
    }
    const onHandlerImageTaken = path => setSelectImage(path)
  return (
    <ScrollView>
        <View>
            <Text>Titulo</Text>
            <TextInput value={titleValue} onChangeText={setTitleValue}/>
            <ImageSelector onImage={image => setSelectImage(image)}/>
            <LocationService onLocation={location=>setlocationValue(location)} />
            <Button title='Guardar' onPress={handleSave} />
        </View>
    </ScrollView>
  )
}

export default NewPlaceScreen

const styles = StyleSheet.create({})