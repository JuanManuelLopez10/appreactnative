import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useReducer } from 'react'
import Colors from '../constants/Colors'

const INPUT_CHANGE = 'INPUT_CHANGE'
const INPUT_BLUR = 'INPUT_BLUR'

const inputreducer = (state, action) => {
    switch(action.type){
        case INPUT_CHANGE:
            return {
                ...state,
                value: action.value,
                isValid: action.isValid
            }
        case INPUT_BLUR:
            return {
                ...state,
                touched: true
            }
        default:
            return state
    }
}
const Input = props => {
    const [inputState, dispatch] = useReducer(inputreducer, {
        value: props.initialValue ? props.initialValue : '',
        isValid: props.initialValid,
        touched: false
    })
    const { onInputChange, id } = props

    useEffect(() => {
        if (inputState.touched) {
            onInputChange(id, inputState.value, inputState.isValid)
        }
    }, [inputState, onInputChange])

    const textChangeHandler = text => {
        const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
        let isValid = true
        if (props.required && text.trim().length === 0) {
            isValid = false
        }
        if (props.email && emailRegex.test(text.toLowerCase())){

            isValid = false
        }
        if (props.min != null & +text < props.min){

            isValid = false
        }
        if (props.max != null & +text > props.min){
            isValid = false

        }
        if (props.minLength != null & +text.length < props.minLength){
            isValid = false
            
        }
        dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid})
    }
        const lostFocusHandler = () => {
            dispatch({ type: INPUT_BLUR })
        }
    return (
        
        <View style={[styles.Input, {backgroundColor: props.mode==='Light' ? 'white' : Colors.darkBackground}]}>
            <TextInput placeholderTextColor={props.mode==='Light' ? 'black' : 'white'} style={{color: props.mode==='Light' ? 'black' : 'white'}} placeholder='Email' {...props} value={inputState.value} onChangeText={textChangeHandler} onBlur={lostFocusHandler}/>
        </View>
        
    )
}
export default Input

const styles = StyleSheet.create({
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
        borderColor: Colors.primary,
        borderWidth: 1
    }
})