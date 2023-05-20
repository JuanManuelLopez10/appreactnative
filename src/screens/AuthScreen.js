import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { fontPixel, heightPixel, pixelSizeHorizontal, widthPixel } from '../../utils/normalize'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { deleteUser, fetchMode, fetchUser, insertMode, updateMode } from '../db'
import { useDispatch } from 'react-redux'
import { getsavedsignin } from '../store/actions/auth.actions'

const AuthScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const GetUserIfSaved = () => {
        dispatch(getsavedsignin())
    }
    GetUserIfSaved()

    // const fetcheu = async (useremail) => {
    //     const deleteu = await deleteUser()
    //     const fetc = await fetchUser()
    //     console.log(deleteu.rows);
    // }
    // fetcheu()
    const NavigateToSignIn = () => {
        navigation.navigate('SignIn')
    }
    const NavigateToSignUp = () => {
        navigation.navigate('SignUp')
    }

    return (
        <>
            <SafeAreaView />
            <View style={styles.Screen}>
                <View style={styles.Header}>
                <Text></Text>
                <Image style={styles.Logo} source={require('../../assets/icon.png')} />
                <TouchableOpacity onPress={async () => {
                    const result = await fetchUser()
                    console.log(result.rows._array)
                    insertMode('Light')
                    fetchMode()
                    .then(() => console.log('           Database inicializada'))
                    .catch(err => {
                    console.log('       error:', err);
                    console.log('       error:', 'Database fail connect');
                  })
                }} >
                    <Text>s</Text>
                </TouchableOpacity>
                </View>

                {/* <View>
                    <Text style={styles.LogoName}>Hagamo un asado</Text>
                </View>
                <View style={styles.Options}>
                    <Text style={styles.OptionsTitle}>Bienvenido</Text>
                    <Text style={styles.OptionsSubtitle}>¿Ya tenés una cuenta?</Text>
                    <View style={styles.OptionsView}>
                        <TouchableOpacity onPress={NavigateToSignIn} style={[styles.OptionButton, { backgroundColor: Colors.light }]}>
                            <Text style={[styles.OptionButtonText]}>Iniciar sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={NavigateToSignUp} style={[styles.OptionButton, { backgroundColor: Colors.dark }]}>
                            <Text style={[styles.OptionButtonText, {color: Colors.light}]}>Registrarse</Text>
                        </TouchableOpacity> */}
                    {/* </View>
                </View> */}
            </View>
        </>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    Screen: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    Header:{
        width: '100%',
        height: heightPixel(60),
        position: 'absolute',
        marginTop: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: widthPixel(20)
    },
    Logo: {
      height: heightPixel(60),
      width: heightPixel(60),
      alignSelf: 'center',
      marginTop: heightPixel(50)
    },
    LogoName: {
        alignSelf: 'center',
        fontSize: fontPixel(35),
        color: Colors.primary,
        fontWeight: 500
    },
    Options: {
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: heightPixel(100),
        backgroundColor: Colors.primary,
        alignItems: 'center',
        borderTopEndRadius: 50,
        borderTopLeftRadius: 50
    },
    OptionsTitle: {
        color: 'white',
        marginTop: pixelSizeHorizontal(30),
        fontSize: fontPixel(40),
    },
    OptionsSubtitle: {
        fontSize: fontPixel(15),
        color: Colors.light
    },
    OptionsView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: heightPixel(30)

    },
    OptionButton: {
        paddingHorizontal: widthPixel(10),
        paddingVertical: heightPixel(15),
        borderRadius: heightPixel(30),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    OptionButtonText: {
        fontSize: fontPixel(20)
    }
})