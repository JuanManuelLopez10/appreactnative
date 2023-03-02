import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Formulario = (props) => {
  return (
    <View>
    <TextInput
    placeholder='Agregar participante'
    style={styles.input}
    onChangeText={props.onchangeText}
    value={props.itemText}
    />
          <TextInput
    placeholder='¿Qué lleva?'
    style={styles.input}
    onChangeText={props.onchangelleva}
    value={props.itemlleva}
    />
    <Button title='Agregar' onPress={props.agregar}/>
    </View>

  )
}

export default Formulario

const styles = StyleSheet.create({})