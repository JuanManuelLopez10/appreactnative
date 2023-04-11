import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useReducer } from 'react'

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
        console.log(text);
        const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
        let isValid = true
        if (props.required && text.trim().length === 0) {
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
        <View>
            <Text>{props.label}</Text>
            <TextInput {...props} value={inputState.value} onChangeText={textChangeHandler} onBlur={lostFocusHandler}/>
            {!inputState.isValid && inputState.touched && (
                <View>
                    <Text>{props.errorText}</Text>
                </View>
            )}
        </View>
        
    )
}
export default Input

const styles = StyleSheet.create({})