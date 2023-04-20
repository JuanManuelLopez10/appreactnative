import { FlatList, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React, { useState } from 'react'
import ImageSelector from '../components/ImageSelector'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { signupothers } from '../store/actions/auth.actions'

const AcountScreen = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state=>state.auth)
    const [selectImage, setSelectImage] = useState('')

    const [NickName, setNickName] = useState('')
    const handleChangedText = (text) => {
        setNickName(text)
    }
    const SaveNickName = (text) =>{
        dispatch(signupothers(isAuth.email, text))
    }


    return(
        <>
        <SafeAreaView/>
        <View style={styles.Screen}>
            <ImageSelector onImage={image => {setSelectImage(image)
            console.log('    Imagen: ',selectImage);}}/>
            <TextInput onChangeText={handleChangedText} placeholder='Nombre de usuario'/>
            <Button title='Guardar' onPress={()=>SaveNickName(NickName)}/>
        </View>
        </>
  )
}

export default AcountScreen

const styles = StyleSheet.create({
    Screen: {
        display: 'flex',
        alignItems: 'center'
    }
})