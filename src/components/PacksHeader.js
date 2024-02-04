import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPixel } from '../../utils/normalize'
import TaskHeaderOption from './TaskHeaderOption'
import { useSelector } from 'react-redux'
import Colors from '../constants/Colors'
import { ScrollView } from 'react-native'

const PacksHeader = ({navigation}) => {
    const deletedDuplicates = ['Mis packs', 'Comprar packs', 'Mis items']
  return (
    <ScrollView horizontal={true} contentContainerStyle={[styles.TasksHeader, {width:`${deletedDuplicates.length * 40}%`}]} >
        {
            deletedDuplicates.map(item=>(
                <TaskHeaderOption navigation={navigation} key={item} class={item}/>
            ))
        }
    </ScrollView>
  )
}

export default PacksHeader

const styles = StyleSheet.create({
    TasksHeader:{
        display: 'flex',
        flexDirection:'row',
        height: heightPixel(60),
        width:'100%',
        backgroundColor:'#2c2c2c',
    }
})