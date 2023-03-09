import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
const Input = () => {
    const [ValorInput, setValorInput] = React.useState('')

    const numberInputHandler = inputText => {
        setValorInput(inputText.replace(/[^0-9]/g,''))
    }
  return (
    <View>
      <TextInput blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="number-pad" maxLength={2} value={ValorInput} onChangeText={numberInputHandler} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({})