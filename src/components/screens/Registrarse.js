import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Registrarse = (props) => {
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
                <Button onPress={() => { props.registrarse(NombreUsuario, ContraseñaUsuario) }} title='Registrarse' />
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
        width: '80%',
        backgroundColor: 'white',
        margin: 50,
        elevation: 20,
        padding: 10
    }
})