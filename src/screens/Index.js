import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const { height, width } = Dimensions.get("window")

const Index = ({ navigation }) => {

  const [selected, setSelected] = useState("");

  const tipodeasado = [
    { key: '1', value: 'Con invitación' },
    { key: '2', value: 'Privado' },
    { key: '3', value: 'Público' },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.titulo}> Crear asado </Text>
      </View>
      <View style={styles.containerList}>
        <SelectList
          setSelected={(item) => setSelected(item)}
          boxStyles={styles.boxList}
          data={tipodeasado}
          placeholder="Tipo de asado"
          save="value"
        />
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.Btn} onPress={() => { navigation.navigate('creado') }} >
          <Text style={styles.textBtn}>Empezar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    marginVertical: 10
  },
  containerTitle: {
    justifyContent: 'center',
  },
  containerList: {
    alignItems: 'center',
    width: width,
  },
  boxList: {
    width: width * 0.9,
    marginVertical: 10,
  },
  containerBtn: {
    width: width * 0.9,
    marginTop: height * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btn: {
    width: width * 0.9,
    backgroundColor: "#0165e7",
    padding: 8,
    borderRadius: 5,
  },
  textBtn:{
    textAlign: 'center',
    color: "#fff",
    fontSize: 16,
  },
})