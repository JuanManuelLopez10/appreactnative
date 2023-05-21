import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { fontPixel, heightPixel, pixelSizeHorizontal, widthPixel } from '../../utils/normalize'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { deleteUser, fetchMode, fetchUser, insertMode, updateMode } from '../db'
import { useDispatch, useSelector } from 'react-redux'
import { changeMode, getsavedsignin } from '../store/actions/auth.actions'
import { Ionicons } from '@expo/vector-icons'


const AuthScreen = ({ navigation }) => {
    const auth = useSelector(state => state.auth)
    console.log(auth);
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
            <ImageBackground source={require('../../assets/blog_35864_8995.jpg')} style={{ flex: 1 }}>
                <View style={auth.Mode === 'Light' ? styles.overlayLight : styles.overlayLightDark} />
                <View style={[styles.Screen, { backgroundColor: auth.Mode === 'Dark' ? 'rgb(30,30,30,0.7)' : 'rgb(255,255,255,0.7)' }]}>
                    <View style={styles.Header}>
                        <Text></Text>
                        <Image style={styles.Logo} source={require('../../assets/icon.png')} />
                        <TouchableOpacity onPress={async () => {
                            const current = await fetchMode()
                            console.log(current.rows._array[0].mode);
                            const algo = current.rows._array[0].mode
                            dispatch(changeMode(algo))
                            console.log('Pureb');
                        }} >
                            <Ionicons name={auth.Mode === 'Dark' ? 'moon' : 'sunny'} style={{ fontSize: fontPixel(30), color: auth.Mode === 'Dark' ? 'white' : 'black' }} />
                        </TouchableOpacity>
                    </View>

                    <Text></Text>

                    <View style={styles.Screeen} >
                        <Text style={[styles.Title, { color: auth.Mode === 'Dark' ? 'white' : 'black' }]} >Celebrá el arte</Text>
                        <Text style={styles.Subtitle} >de un buen asado</Text>
                    </View>
                    <View style={{ margin: 30 }}>
                        <TouchableOpacity style={styles.Button} onPress={() => {
                            navigation.navigate('SignIn')
                        }}>
                            <Text style={styles.ButtonText} >Iniciar sesión</Text>
                        </TouchableOpacity>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ color: auth.Mode === 'Dark' ? 'white' : 'black' }} >¿No tienes cuenta? </Text>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('SignUp')
                            }}>
                                <Text style={{ color: auth.Mode === 'Dark' ? 'white' : 'black', textDecorationLine: 'underline'}} >
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
        justifyContent: 'space-between',
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
        backgroundColor: Colors.primary,
        height: heightPixel(70),
        width: widthPixel(250),
        borderRadius: 200,
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