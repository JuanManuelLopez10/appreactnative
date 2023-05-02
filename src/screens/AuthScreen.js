import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { fontPixel, heightPixel, pixelSizeHorizontal, widthPixel } from '../../utils/normalize'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { deleteUser, fetchUser } from '../db'
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
                <View>
                    <Image style={styles.Logo} src={'https://previews.123rf.com/images/vladischern/vladischern1804/vladischern180400001/98715833-alimentos-carne-filete-asado-a-la-parrilla-dibujado-a-mano-ilustraci%C3%B3n-vectorial-dibujo-realista.jpg'}/>
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
                </View>
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
    Logo: {
      height: heightPixel(200),
      width: widthPixel(200),
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