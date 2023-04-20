import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { widthPixel } from '../../utils/normalize'

const ImageSelector = ({onImage}) => {
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
            aspect: [1,1],
            quality: 0.8
        })
        console.log(image);
        setpickedUri(image.assets[0].uri)
        onImage(image.assets[0].uri)
    }

  return (
    <View style={styles.ViewImageSelector}>
        <View >
            {!pickedUri ? <Image style={styles.image} src={'https://thumbs.dreamstime.com/b/imagen-masculina-del-perfil-s%C3%ADmbolo-icono-avatar-de-la-silueta-132834199.jpg'}/>
            : <Image style={styles.image} source={{uri:pickedUri}}/>
            }
        </View>
        <Button title='Tomar foto' onPress={handlerTakeImage} />
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    ViewImageSelector: {
        width: '50%',
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: widthPixel(100),
        height: widthPixel(100)
    }
})