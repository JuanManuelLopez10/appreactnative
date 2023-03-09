import { StyleSheet, Text, View, Modal, Button } from 'react-native'
import React from 'react'

const Modaleliminar = (props) => {
    if (props.selectedItem) {
        
    }
  return (
    <Modal
    animationType='slide'
    visible={props.modalVisible}>
      <View>
        <View>
          <Text>Eliminar {props.selectedItem?.nombre}</Text>
        </View>
        <View>
          <Text>¿Desea eliminar a {props.selectedItem?.nombre} del asado?</Text>
          <Button
          title='No'
          onPress={() => {
            props.setModalVisible(false)
            props.setselectedItem(null)
          }}/>
          <Button
          title='Si'
          onPress={() => {
            console.log(props.selectedItem);
            props.eliminaritem(props.selectedItem.id)
          }}/>
        </View>
      </View>
   </Modal> 
  )
}

export default Modaleliminar

const styles = StyleSheet.create({})