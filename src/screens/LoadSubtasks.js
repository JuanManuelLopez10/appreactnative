import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadSubtask, uploadTask } from '../store/actions/tasks.actions'

const LoadSubtasks = () => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState('')
  const [gifttype, setgifttype] = useState('')
  const [value, setvalue] = useState('')
  const [title, setTitle] = useState('')
  
  let objeto = {
      description : description,
      gift: {type:gifttype, value:value},
      title: title,
  }

  const changegiftvalue = (a) => {
      if(gifttype==='money'){
          setvalue(a)
      }else{
          let obj = [{id:a}]
          setvalue(obj)
      }
  }
  
return (
  <View>
      <TextInput value={title} onChangeText={setTitle} placeholder='Title' />    
      <TextInput value={description} onChangeText={setDescription} placeholder='Descripcion' />    
      <TextInput value={gifttype} onChangeText={setgifttype} placeholder='gifttype' autoCapitalize="none" />
      <TextInput value={value} onChangeText={(text)=>{changegiftvalue(text)}} placeholder='value' keyboardType="numeric" />

    <Text>LoadGifts</Text>
      <TouchableOpacity onPress={()=>{
          dispatch(uploadSubtask(objeto))
          console.log(objeto);

      }} >
          <Text>DDD</Text>
      </TouchableOpacity>
  </View>
)
}

export default LoadSubtasks

const styles = StyleSheet.create({})