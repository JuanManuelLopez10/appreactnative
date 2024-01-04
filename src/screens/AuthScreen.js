import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { fontPixel, heightPixel, pixelSizeHorizontal, widthPixel } from '../../utils/normalize'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { deleteUser, fetchMode, fetchUser, insertMode, updateMode } from '../db'
import { useDispatch, useSelector } from 'react-redux'
import { getsavedsignin } from '../store/actions/auth.actions'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { getusers } from '../store/actions/users.actions'


const AuthScreen = ({ navigation }) => {
    const auth = useSelector(state => state.theme)
    const user = useSelector(state => state.auth)

    const dispatch = useDispatch()
    dispatch(getusers())
    const GetUserIfSaved = () => {
        dispatch(getsavedsignin())
    }
    GetUserIfSaved()

    const NavigateToSignIn = () => {
        navigation.navigate('SignIn')
    }
    const NavigateToSignUp = () => {
        navigation.navigate('SignUp')
    }

    return (
        <>
            <SafeAreaView />
            <ImageBackground source={require('../../assets/coso.jpg')} style={{ flex: 1 }}>
                <View style={styles.overlayLightDark} />
                <View style={[styles.Screen, { backgroundColor: 'rgb(30,30,30,0.7)'}]}>


                    <Text></Text>

                    <View style={styles.Screeen} >
                        <Text style={[styles.Title, { color: 'white'}]} >La felicidad</Text>
                        <Text style={styles.Subtitle} >a largo plazo</Text>
                    </View>
                    <View style={{ margin: 30 }}>
                    <LinearGradient colors={[Colors.primary, Colors.secondary]} start={{ x: 0, y: 0 }} style={styles.Button}>
                        
                        <TouchableOpacity style={[styles.Button, {marginBottom:0}]} onPress={() => {
                            navigation.navigate('SignIn')
                        }}>
                            <Text style={styles.ButtonText} >Iniciar sesión</Text>
                        </TouchableOpacity>
                        </LinearGradient>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ color: 'white'}} >¿No tienes cuenta? </Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('SignUp')
                            }}>
                                <Text style={{ color: 'white', textDecorationLine: 'underline'}} >
                                    Registrate
                                </Text>
                            </TouchableOpacity>
                        </View>
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
                        </TouchableOpacity>
                    </View>
                </View> */}
                </View>
            </ImageBackground>
        </>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    Screen: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',

    },
    Screeen: {
        display: 'flex',
        padding: widthPixel(20),
        justifyContent: 'center',

    },
    Header: {
        width: '100%',
        height: heightPixel(60),
        position: 'absolute',
        marginTop: 0,
        paddingHorizontal: widthPixel(10),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: widthPixel(20),
        zIndex: 3
    },
    Logo: {
        height: heightPixel(60),
        width: heightPixel(60),
        alignSelf: 'center',
        marginTop: heightPixel(50)
    },
    Title: {
        fontSize: fontPixel(55),
        fontWeight: '700'
    },
    Subtitle: {
        fontSize: fontPixel(40),
        color: Colors.primary,
        fontWeight: '500'
    },
    overlayLight: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Ajusta el color y la opacidad del sobrefondo aquí
    },
    overlayLightDark: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Ajusta el color y la opacidad del sobrefondo aquí
    },
    Button: {
        height: heightPixel(70),
        width: widthPixel(250),
        borderRadius: 200,
        borderColor:Colors.secondary,
        borderWidth: heightPixel(3),
        alignSelf: 'center',
        marginBottom: heightPixel(70),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        
        elevation: 18,
    },
    ButtonText: {
        fontSize: fontPixel(20),
        color: 'white'
    }
})