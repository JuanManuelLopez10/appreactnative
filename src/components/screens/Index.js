import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list';

const Index = ( { navigation }) => {
    console.log("index");
    const tipodeasado = [
        {key:'1', value:'Con invitación'},
        {key:'2', value:'Privado'},
        {key:'3', value:'Público'},
    ]
    return (
      <View>
          <View>
            <Text style={styles.titulo}> Crear asado </Text>
            <SelectList 
          boxStyles={styles.opciones}
            data={tipodeasado} 
            placeholder="Tipo de asado"
            save="value"
          />
          <Button title='Empezar' onPress={()=>{navigation.navigate('creado')}}/>
          </View>
      </View>
    )
  
  }

export default Index

const styles = StyleSheet.create({
    titulo:{
        fontSize: 30,
        margin: 10
    }
})