import { Alert, StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'


const ImageSelector = () => {

    const [pickedUri, setpickedUri] = useState()
    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos para usar la cámara en esta aplicación',
                [{text:'Ok'}]
            )
            return false
        }
        return true
    }
    const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions()
        if(!isCameraOk) return
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.8
        })
        setpickedUri(image.uri)
        props.onImage(image.uri)
    }

  return (
    <View>
        <View>
            {!pickedUri ? (<Text>No hay imagen seleccionada</Text>)
            : (<Image source={{uri: pickedUri}}/>)
            }
        </View>
        <Button title='Tomar foto' onPress={handlerTakeImage} />
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({})