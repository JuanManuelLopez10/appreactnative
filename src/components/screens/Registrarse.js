import { Button, StyleSheet, Text, TextInput, View, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../constants/Colors'

const Registrarse = ({ navigation }) => {
    const [isPortrait, setisPortrait] = useState(true)
    const onPortrait = () => {
        const dim = Dimensions.get('screen')
        return dim.height >= dim.width
    }
    const statePortrait = () => setisPortrait(onPortrait())
    useEffect(() => {
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
                <View style={styles.headerformulario}>
                    <Text style={styles.tituloformulario}>Registrate acá</Text>
                </View>
                <View style={styles.bodyformulario}>
                    <TextInput style={styles.textinput} placeholder='Agrega tu nombre' onChangeText={onchangenombre} />
                    <TextInput style={styles.textinput} placeholder='Contraseña' textContentType='password' secureTextEntry={true} onChangeText={onchangecontraseña} />
                    <Pressable style={styles.botonregistrarse} onPress={() => {
                        NombreUsuario && ContraseñaUsuario
                            ? navigation.navigate('index')
                            : ''
                    }}>
                        <Text style={styles.botonregistrarse}>Registrarse</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default Registrarse

const styles = StyleSheet.create({
    pantalla: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center'
    },
    formulario: {
        width: Dimensions.get('window').width / 4 * 3.5,
        backgroundColor: 'white',
        margin: 50,
        elevation: 20,

    },
    headerformulario: {
        backgroundColor: Colors.primary,
        padding: 10
    },
    tituloformulario: {
        fontSize: 20,
        color: 'white'
    },
    bodyformulario: {
        padding: 10
    },
    textinput: {
        marginBottom: 5
    },
    botonregistrarse: {
        backgroundColor: Colors.accent,
        padding: 4,
        elevation: 3,
        color: 'white'
    }
})