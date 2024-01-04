import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import Colors from '../constants/Colors'
import { fontPixel, heightPixel } from '../../utils/normalize'
import { useDispatch, useSelector } from 'react-redux'
import PackView from './PackView'
import NewItemsModal from './NewItemsModal'
import { reload } from '../store/actions/auth.actions'

const MyPacks = (props) => {
    const user = useSelector(state => state.auth)
    const app = useSelector(state => state.app).openPack    // lamela barnes burktan modric
    const dispatch = useDispatch()

  return (
    <ScrollView style={styles.MyPacks}>
        {
            user.packs && user.packs.length>0
            ?
            user.packs.map(item => {
                if(item.Default!=='0')
                return(
                    <PackView opened={props.opened} key={item.id} id={item} go={props.go}/>
                )
            })
            :<>
                <Text style={styles.NotToOpen}>
                    No tenés packs para abrir
                </Text>
            </>
        }

    </ScrollView>
  )
}

export default MyPacks

const styles = StyleSheet.create({
    MyPacks:{
        width:'100%',
        marginBottom:heightPixel(5),
        height:'auto',
        paddingTop:heightPixel(30),
        paddingBottom: 20,      
    },
    NotToOpen:{
        width:'70%',
        textAlign:'center',
        alignSelf:'center',
        color:'white',
        fontSize:fontPixel(45),
        marginTop:heightPixel(30)
    }
})