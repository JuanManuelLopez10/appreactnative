import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { uploadGift } from '../store/actions/gifts.actions'

const LoadGifts = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [overall, setOverall] = useState(1)
    const [sellPrice, setSellPrice] = useState('')
    const [estilo, setEstilo] = useState('')
    const [valor, setValor] = useState('')
    
    let objeto = {
        name : title,
        overall : overall,
        sellPrice: sellPrice,
        style: estilo,
        value: valor
    }

    const changeoverall = (a) => {
        setOverall(a)
        if (estilo==='special'){
        setSellPrice(a*5.2)
        }else{
        setSellPrice(a*4.8)
        }
        if (a<80) {
            setValor('bronze')
        }else if(a>79 && a<84){
            setValor('silver')
        }else{
            setValor('gold')
        }
    }
    
  return (
    <View>
        <TextInput value={title} onChangeText={setTitle} placeholder='Title' />    
        <TextInput value={estilo} onChangeText={setEstilo} autoCapitalize='none' placeholder='Estilo(especial o no)' />    
        <TextInput value={overall} onChangeText={text => changeoverall(text)} keyboardType='numeric' placeholder='Overall' />    
      <Text>LoadGifts</Text>
        <TouchableOpacity onPress={()=>{
            dispatch(uploadGift(objeto))
            console.log(objeto);
            setTitle('')
            setOverall(0)
            setEstilo('')
        }} >
            <Text>DDD</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LoadGifts

const styles = StyleSheet.create({})