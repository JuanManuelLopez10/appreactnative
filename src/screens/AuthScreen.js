import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../store/actions/auth.actions'
import Input from '../components/Input'

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

const AuthScreen = () => {
    const dispatch = useDispatch()

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: ''
        },
        inputValidities: {
            email: false,
            password: false
        },
        formIsValid: false
    })

    const onHandleRegister = () => {
        if(!formState.formIsValid){
            dispatch(signup(formState.inputValues.email, formState.inputValues.password))
        } else {
            console.log(formState.inputValues.email) 
            alert('Ingrese el email y contraseña válidos')
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

    return (
    <KeyboardAvoidingView behavior='height'>
        <View>
            <Text>Formulario</Text>
            <View>
                <Input initialValue={formState.inputValues.email} initialValid={formState.inputValidities.email} onInputChange={handleChangedText} id='email' required minLength={5} label='Email' errorText='Por favor, ingrese un mail válido' autoCapitalize='none' keyboardType='email-address' />
                <Input initialValue={formState.inputValues.password} initialValid={formState.inputValidities.password} onInputChange={handleChangedText} id='password' required minLength={5} label='Contraseña' errorText='Contraseña incorrecta' autoCapitalize='none' secureTextEntry />

                <TouchableOpacity onPress={onHandleRegister}>
                    <Text>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({})