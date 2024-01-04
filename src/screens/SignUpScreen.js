import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button } from 'react-native'
import React, { useCallback, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup, signupothers } from '../store/actions/auth.actions'
import Input from '../components/Input'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import Colors, { APPNAME } from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

export const formReducer = (state, action) => {
    
    if (action.type === FORM_INPUT_UPDATE){
        const inputValues = {
            ...state.inputValues,
            [action.input] : action.value
        }
        const inputValidities = {
            ...state.inputValidities,
            [action.input] : action.isValid
        }
        let formIsValid = true

        for (const key in inputValidities){
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

const SignUpScreen = ({navigation}) => {
    const [PasswordShown, setPasswordShown] = useState(false)
    const turnPasswordToShown = () => {
        setPasswordShown(true)
    }
    const turnPasswordToHide = () => {
        setPasswordShown(false)
    }


    const dispatch = useDispatch()
    const [Password, setPassword] = useState('')
    const cambiarshowpassword = (text) => {
        setPassword(text)
    }
    const [RepeatedPassword, setRepeatedPassword] = useState('')
    const cambiarshowrepeatedpassword = (text) => {
        setRepeatedPassword(text)
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
    const Prueba = (text) => {
        dispatch(signupothers(text))
    }
    const onHandleRegister = () => {
        if (Password===RepeatedPassword) {
            if (formState.inputValues.password === '') {
            }
            if(!formState.formIsValid){
                dispatch(signup(formState.inputValues.email, Password))
            } else {
                alert('Ingrese el email y contraseña válidos')
            }
        }else{
            console.log('Contraseña no es igual');
        }

    }

    const handleChangedText = useCallback((inputIdentifier, inputValue, inputValidity) => {
        
        dispatchFormState ({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        })
    },[dispatchFormState])
    const GoToSignUpScreen = () => {
        navigation.navigate('SignIn')
    }

    return (
    <KeyboardAvoidingView  style={styles.container}>
        <SafeAreaView/>
            <View style={[styles.Screen, {backgroundColor: Colors.darkBackground}]}>
            <View style={{marginTop: heightPixel(70)}} >
            <Image style={styles.Logo} source={require('../../assets/icon.png')} />
                <Text style={styles.LogoName}>{APPNAME}</Text>
            </View>
            <View style={styles.Form}>
                
            <View style={{height: 40, display: 'flex', flexDirection: 'row', justifyContent:'center', width:'100%', overflow: 'hidden', marginBottom: heightPixel(15)}} >
                    <View style={{height: '50%', borderBottomWidth: 1, borderBottomColor: 'grey', width: '50%', alignSelf: 'flex-start'}} ></View>
                    <Text style={{alignSelf:'center', color: 'grey'}} >   Registrarse   </Text>
                    <View style={{height: '50%', borderBottomWidth: 1, borderBottomColor: 'grey', width: '50%', alignSelf: 'flex-start'}} ></View>
                </View>

                <Input initialValue={formState.inputValues.email} initialValid={formState.inputValidities.email} onInputChange={handleChangedText} id='email' required minLength={5} label='Email' errorText='Por favor, ingrese un mail válido' autoCapitalize='none' keyboardType='email-address' />
                <View style={[styles.Input, {backgroundColor: Colors.darkBackground, marginVertical: heightPixel(20)}]}>
                    {
                        PasswordShown===false
                        ? <>
                        <TextInput placeholderTextColor={'white'} style={{width: '80%', color: 'white'}} onChangeText={cambiarshowpassword} placeholder='Password' secureTextEntry />
                        <Ionicons onPress={turnPasswordToShown} style={styles.ShowPassword} name='md-eye' size={fontPixel(20)}/>
                         </>
                        : <>
                        <TextInput placeholderTextColor={'white'} style={{width: '80%', color: 'white'}} onChangeText={cambiarshowpassword} placeholder='Password'  />
                        <Ionicons onPress={turnPasswordToHide} style={styles.ShowPassword} name='md-eye-off' size={fontPixel(20)}/>
                        </>
                    }
                </View>
                <View style={[styles.Input, {backgroundColor:Colors.darkBackground, marginBottom: heightPixel(40)}]}>
                    {
                        PasswordShown===false
                        ? <>
                        <TextInput placeholderTextColor={'white'} style={{width: '80%', color: 'white'}}  onChangeText={cambiarshowrepeatedpassword} placeholder='Password' secureTextEntry />
                        <Ionicons onPress={turnPasswordToShown} style={styles.ShowPassword} name='md-eye' size={fontPixel(20)}/>
                         </>
                        : <>
                        <TextInput placeholderTextColor={'white'} style={{width: '80%', color: 'white'}} onChangeText={cambiarshowrepeatedpassword} placeholder='Password'  />
                        <Ionicons onPress={turnPasswordToHide} style={styles.ShowPassword} name='md-eye-off' size={fontPixel(20)}/>
                        </>
                    }
                </View>

                <TouchableOpacity style={styles.LoginButton} onPress={()=>{onHandleRegister()}}>
                    <Text  style={[styles.LoginButtonText, {color:'white'}]}>Registrarse</Text>
                </TouchableOpacity>
                <View style={styles.ViewGoToSignUpScreen}>
                    <Text style={{color: 'white'}}>¿Ya tienes cuenta? </Text>
                <TouchableOpacity onPress={GoToSignUpScreen} >
                    <Text style={{color: 'white'}}>Iniciar sesión</Text>
                </TouchableOpacity>
                </View>
            </View>

        </View>
    </KeyboardAvoidingView>

    // <KeyboardAvoidingView behavior='height'>
    //     <View>
    //         <Text>Formulario</Text>
    //         <View>
    //             <Input initialValue={formState.inputValues.email} initialValid={formState.inputValidities.email} onInputChange={handleChangedText} id='email' required minLength={5} label='Email' errorText='Por favor, ingrese un mail válido' autoCapitalize='none' keyboardType='email-address' />
    //             <TextInput onChangeText={cambiarshowpassword} placeholder='Password'/>
    //             <TouchableOpacity onPress={onHandleRegister}>
    //                 <Text>Registrarse</Text>
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    // </KeyboardAvoidingView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    Screen: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
        height: '50%',
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: heightPixel(30),
        alignItems: 'center'
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
        borderWidth: 1    },
    container: {
        height: heightPixel(900)
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
    ViewGoToSignUpScreen:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: heightPixel(30)
    }
})