import { Button, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

const Registrarse = ({ navigation } ) => {
    const [isPortrait, setisPortrait] = useState(true)
    const onPortrait = () => {
      const dim = Dimensions.get('screen')
      return dim.height >= dim.width
    }
    const statePortrait = () => setisPortrait(onPortrait())
    useEffect(()=>{
      Dimensions.addEventListener('change', statePortrait)
      return () => {
        Dimensions.addEventListener('change', statePortrait)
      }
    })

    const [NombreUsuario, setNombreUsuario] = useState()
    const [ContraseñaUsuario, setContraseñaUsuario] = useState()

    const onchangenombre = (a) => {
        setNombreUsuario(a)
    }
    const onchangecontraseña = (a) => {
        setContraseñaUsuario(a)
    }
    return (
        <View style={styles.pantalla}>
            <View style={styles.formulario}>

                <Text>Registrate acá</Text>
                <TextInput placeholder='Agrega tu nombre' onChangeText={onchangenombre} />
                <TextInput placeholder='Contraseña' textContentType='password' secureTextEntry={true} onChangeText={onchangecontraseña} />
                <Button title='Registrarse' onPress={()=> {
                    navigation.navigate('index')
                }}/>
            </View>
        </View>
  )
}

export default Registrarse

const styles = StyleSheet.create({
    pantalla: {
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center'
    },
    formulario: {
        width: Dimensions.get('window').width / 4 * 3,
        backgroundColor: 'white',
        margin: 50,
        elevation: 20,
        padding: 10
    }
})