import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { fontPixel, heightPixel } from '../../utils/normalize'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'react-native-elements'
import PackImage from './PackImage'
import { TouchableOpacity } from 'react-native'
import { deletepack, openPack, reload } from '../store/actions/auth.actions'
import { useState } from 'react'
import { changeTaskOption, openPacks } from '../store/actions/app.actions'

const PackView = (props) => {
    const packs = useSelector(state => state.packs).packs
    const user = useSelector(state => state.auth)
    const coso = packs.find(item => item.id === props.id.pack)
    const dispatch = useDispatch()
    const open = () => {
      props.go(props.id.pack, props.id.id)
    }
  return (
    <>
    <TouchableOpacity key={props.id.id} onPress={()=>{
        open()
    }} style={styles.PackView}>
      <Text style={styles.Title}>{coso.title}</Text>
      <PackImage type={coso.type}/>
    </TouchableOpacity>

    </>
  )
}

export default PackView

const styles = StyleSheet.create({
    PackView:{
        width:'70%',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:Colors.darkthirdBackground,
        height:heightPixel(300),
        padding:'2%',
        marginBottom: heightPixel(25)
    },
    Title:{
        fontSize:fontPixel(25),
        fontWeight:'600',
        color:'white',
        marginBottom:heightPixel(30),
        marginTop:heightPixel(10)
    },

})