import { StyleSheet, Text, ImageBackground, TextInput ,TouchableOpacity, View, Image, KeyboardAvoidingView } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin, signup } from '../store/actions/auth.actions'
import Input from '../components/Input'
import Colors, { APPNAME } from '../constants/Colors'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { Ionicons } from '@expo/vector-icons'
import { CheckBox } from 'react-native-elements'
import { fetchMode, insertUser } from '../db'
import { SafeAreaView } from 'react-native-safe-area-context'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

export const formReducer = (state, action) => {



    if (action.type === FORM_INPUT_UPDATE) {
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let formIsValid = true

        for (const key in inputValidities) {
            formIsValid = formIsValid && inputValidities[key]
        }
        return {
            formIsValid: formIsValid,
            inputValidities: inputValidities,
            inputValues: inputValues
        }
    }
    return state
}

const SignInScreen = ({ navigation }) => {
    const [PasswordShown, setPasswordShown] = useState(false)
    const [stayLogin, setstayLogin] = useState(false)
    const turnPasswordToShown = () => {
        setPasswordShown(true)
    }
    const Auth = useSelector(state=>state.theme)
    const turnPasswordToHide = () => {
        setPasswordShown(false)
    }
    const dispatch = useDispatch()
    const [Password, setPassword] = useState('')
    const cambiarshowpassword = (text) => {
        setPassword(text)
    }
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: '',
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false
    })
    const onHandleRegister = async () => {
        if (!formState.formIsValid){
            dispatch(signin(formState.inputValues.email, Password))
            const saveuser = await insertUser(formState.inputValues.email, Password)
        } else {
            alert('Ingrese el email y contraseña válidos')
        }
    }

    const handleChangedText = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        })
    }, [dispatchFormState])
    const GoToSignUpScreen = () => {
        navigation.navigate('SignUp')
    }
    
    return (
    <KeyboardAvoidingView  style={styles.container}>

            <SafeAreaView/>
            <View style={[styles.Screen, {backgroundColor: Colors.darkBackground}]}>


                <View style={{marginTop: heightPixel(70)}}>
                    <Image style={styles.Logo} source={require('../../assets/icon.png')} />
                    <Text style={styles.LogoName}>{APPNAME}</Text>
                </View>
                <View style={styles.Form}>

                <View style={{height: 40, display: 'flex', flexDirection: 'row', justifyContent:'center', width:'100%', overflow: 'hidden'}} >
                    <View style={{height: '50%', borderBottomWidth: 1, borderBottomColor: 'grey', width: '50%', alignSelf: 'flex-start'}} ></View>
                    <Text style={{alignSelf:'center', color: 'grey'}} >   Iniciar sesión   </Text>
                    <View style={{height: '50%', borderBottomWidth: 1, borderBottomColor: 'grey', width: '50%', alignSelf: 'flex-start'}} ></View>
                </View>

                    <Input initialValue={formState.inputValues.email} initialValid={formState.inputValidities.email} onInputChange={handleChangedText} id='email' required minLength={5} label='Email' errorText='Por favor, ingrese un mail válido' autoCapitalize='none' keyboardType='email-address' />
                    <View style={[styles.Input, {backgroundColor: Colors.darkBackground, marginVertical: heightPixel(20)}]}>
                        {
                            PasswordShown===false
                            ? <>
                            <TextInput placeholderTextColor={'white'} style={{width: '80%', color:'white'}} onChangeText={cambiarshowpassword} placeholder='Password' secureTextEntry />
                            <Ionicons onPress={turnPasswordToShown} style={styles.ShowPassword} name='md-eye' size={fontPixel(20)}/>
                             </>
                            : <>
                            <TextInput placeholderTextColor={'white'} style={{width: '80%', color: 'white'}} onChangeText={cambiarshowpassword} placeholder='Password'  />
                            <Ionicons onPress={turnPasswordToHide} style={styles.ShowPassword} name='md-eye-off' size={fontPixel(20)}/>
                            </>
                        }
                    </View>
                    <TouchableOpacity>
                        <Text style={[styles.ForgottenPassword, {color: 'white', marginBottom: heightPixel(20)}]}>Olvidé mi contraseña</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LoginButton} onPress={()=>{onHandleRegister()}}>
                        <Text style={[styles.LoginButtonText, {color: 'white'}]}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ViewGoToSignUpScreen}>
                    <Text style={{color: 'white'}}>¿Aún no tienes cuenta? </Text>
                <TouchableOpacity onPress={GoToSignUpScreen} >
                    <Text style={{color: 'white'}}>Registrate</Text>
                </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    Screen: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Logo: {
        height: heightPixel(100),
        width: widthPixel(100),
        alignSelf: 'center',
        marginTop: heightPixel(50)
    },
    LogoName: {
        alignSelf: 'center',
        fontSize: fontPixel(20),
        color: Colors.primary
    },
    Form: {
        width: '80%',
        height: '32%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: heightPixel(30)
    },
    Input: {

        borderRadius: 5,
        width: '90%',
        padding: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        backgroundColor: 'white',
        elevation: 4,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Colors.primary,
        borderWidth: 1
    },
    LoginButton: {
        borderRadius: 15,
        width: '90%',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        backgroundColor: Colors.primary,
        elevation: 4,
    },
    LoginButtonText: {
        alignSelf: 'center',
        fontSize: fontPixel(17),
    },
    ShowPassword: {
        margin: 5,
        color: Colors.primary
    },
    ViewGoToSignUpScreen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '10%',
        width: '80%'
    },
    ForgottenPassword: {
        color: Colors.primary,
        textDecorationLine: 'underline'
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
    container: {
        height: heightPixel(900)
    }
})