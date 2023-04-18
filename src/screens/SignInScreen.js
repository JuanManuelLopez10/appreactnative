import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin, signup } from '../store/actions/auth.actions'
import Input from '../components/Input'
import Colors from '../constants/Colors'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { Ionicons } from '@expo/vector-icons'

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
    const turnPasswordToShown = () => {
        setPasswordShown(true)
        console.log(PasswordShown);
    }
    const turnPasswordToHide = () => {
        setPasswordShown(false)
        console.log(PasswordShown);
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
    const onHandleRegister = () => {
        console.log(formState);

        if (!formState.formIsValid) {
            dispatch(signin(formState.inputValues.email, Password))
            console.log('     email: ' + formState.inputValues.email)
            console.log('     password: ' + Password)

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
        <KeyboardAvoidingView behavior='height'>
            <View style={styles.Screen}>
                <View>
                    <Image style={styles.Logo} src={'https://previews.123rf.com/images/vladischern/vladischern1804/vladischern180400001/98715833-alimentos-carne-filete-asado-a-la-parrilla-dibujado-a-mano-ilustraci%C3%B3n-vectorial-dibujo-realista.jpg'} />
                    <Text style={styles.LogoName}>Hagamo un asado</Text>
                </View>
                <View style={styles.Form}>
                    <Input initialValue={formState.inputValues.email} initialValid={formState.inputValidities.email} onInputChange={handleChangedText} id='email' required minLength={5} label='Email' errorText='Por favor, ingrese un mail válido' autoCapitalize='none' keyboardType='email-address' />
                    <View style={styles.Input}>
                        {
                            PasswordShown===false
                            ? <>
                            <TextInput onChangeText={cambiarshowpassword} placeholder='Password' secureTextEntry />
                            <Ionicons onPress={turnPasswordToShown} style={styles.ShowPassword} name='md-eye' size={fontPixel(20)}/>
                             </>
                            : <>
                            <TextInput onChangeText={cambiarshowpassword} placeholder='Password'  />
                            <Ionicons onPress={turnPasswordToHide} style={styles.ShowPassword} name='md-eye-off' size={fontPixel(20)}/>
                            </>
                        }
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.ForgottenPassword}>Olvidé mi contraseña</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LoginButton} onPress={onHandleRegister}>
                        <Text style={styles.LoginButtonText}>Entrar</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.ViewGoToSignUpScreen}>
                <TouchableOpacity style={styles.GoToSignUpScreen} onPress={GoToSignUpScreen} >
                    <Text style={{color: Colors.light}}>Registrarse</Text>
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
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
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
        height: '40%',
        display: 'flex',
        justifyContent: 'space-around'
    },
    Input: {

        borderRadius: 15,
        width: '90%',
        padding: 5,
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
        justifyContent: 'space-between'
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
        color: Colors.dark
    },
    ShowPassword: {
        margin: 5,
        color: Colors.primary
    },
    ViewGoToSignUpScreen: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '10%',
        width: '80%'
    },
    ForgottenPassword: {
        color: Colors.primary,
        textDecorationLine: 'underline'
    },
    GoToSignUpScreen: {
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
        backgroundColor: Colors.dark,
        elevation: 4,
        display: 'flex',
        alignItems: 'center'
    }
})