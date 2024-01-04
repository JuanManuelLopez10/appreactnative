import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadTask } from '../store/actions/tasks.actions'

const LoadTasks = () => {
  const dispatch = useDispatch()
  const [clase, setClass] = useState('')
  const [description, setDescription] = useState('')
  const [divisions, setdivisions] = useState(0)
  const [subclass, setsubclass] = useState('')
  const [task, settask] = useState('')
  const [gifttype, setgifttype] = useState('')
  const [value, setvalue] = useState('')
  const [title, setTitle] = useState('')
  
  let objeto = {
      class : clase,
      description : description,
      divisions: divisions,
      gift: {type:gifttype, value:value},
      subclass: subclass,
      title: title,
      task: task,
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
      <TextInput value={clase} onChangeText={setClass} placeholder='Clase' />    
      <TextInput value={description} onChangeText={setDescription} placeholder='Descripcion' />    
      <TextInput value={divisions} onChangeText={setdivisions} placeholder='divisions' keyboardType="numeric" />    
      <TextInput value={subclass} onChangeText={setsubclass} placeholder='subclass'/>    
      <TextInput value={task} onChangeText={settask} placeholder='task'  autoCapitalize="none" />    
      <TextInput value={gifttype} onChangeText={setgifttype} placeholder='gifttype' autoCapitalize="none" />
      <TextInput value={value} onChangeText={(text)=>{changegiftvalue(text)}} placeholder='value' keyboardType="numeric" />

    <Text>LoadGifts</Text>
      <TouchableOpacity onPress={()=>{
          dispatch(uploadTask(objeto))
          console.log(objeto);
          setTitle(undefined)
          setClass(undefined)
          setDescription(undefined)
          setdivisions(undefined)
          setsubclass(undefined)
          settask(undefined)
          setgifttype(undefined)
          setvalue(undefined)

      }} >
          <Text>DDD</Text>
      </TouchableOpacity>
  </View>
)
}

export default LoadTasks

const styles = StyleSheet.create({})