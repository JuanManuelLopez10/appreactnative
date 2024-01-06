import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { uploadTask } from '../store/actions/tasks.actions'
import { heightPixel, widthPixel } from '../../utils/normalize'

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
      <Text>Clase:</Text>  
      <View style={{display:'flex', flexDirection:'row', width:widthPixel(300)}} >
      <TouchableOpacity style={styles.Tou} onPress={()=>{setClass('Fundamentos')}} >
        <Text style={{color:'white'}} >Fundamentos</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.Tou} onPress={()=>{setClass('Epoca')}} >
        <Text style={{color:'white'}} >De época</Text>
        </TouchableOpacity>       
        <TouchableOpacity style={styles.Tou} onPress={()=>{setClass('Especiales')}} >
        <Text style={{color:'white'}} >Especiales</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.Tou} onPress={()=>{setClass('Progreso')}} >
        <Text style={{color:'white'}} >Progreso</Text>
        </TouchableOpacity> 
      <TextInput value={description} onChangeText={setDescription} placeholder='Descripcion' />    
      <TextInput value={divisions} onChangeText={setdivisions} placeholder='divisions' keyboardType="numeric" />    
      <TextInput value={subclass} onChangeText={setsubclass} placeholder='subclass'/>    
      <TextInput value={task} onChangeText={settask} placeholder='task'  autoCapitalize="none" />    
      <View style={{display:'flex', flexDirection:'row', width:widthPixel(300)}} >
      <TouchableOpacity style={styles.Tou} onPress={()=>{setgifttype('packs')}} >
        <Text style={{color:'white'}} >Packs</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.Tou} onPress={()=>{setgifttype('money')}} >
        <Text style={{color:'white'}} >Money</Text>
        </TouchableOpacity>       

      </View>

      <TextInput value={value} onChangeText={(text)=>{changegiftvalue(text)}} placeholder='value' keyboardType="numeric" />

    <Text>LoadGifts</Text>
      <TouchableOpacity onPress={()=>{
          dispatch(uploadTask(objeto))
          console.log(objeto);
          setTitle(undefined)
          setDescription(undefined)
          setdivisions(undefined)
          settask(undefined)
          setgifttype(undefined)

      }} >
          <Text>DDD</Text>
      </TouchableOpacity>
  </View>
)
}

export default LoadTasks

const styles = StyleSheet.create({
    Tou:{
            marginVertical:heightPixel(10), 
            width:'40%',
            backgroundColor:'blue',
            marginHorizontal:5
        }
})