import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPixel } from '../../utils/normalize'
import TaskHeaderOption from './TaskHeaderOption'
import { useSelector } from 'react-redux'
import Colors from '../constants/Colors'

const PacksHeader = ({navigation}) => {
    const deletedDuplicates = ['Mis packs', 'Comprar packs', 'Mis items']
  return (
    <View style={styles.TasksHeader}>
        {
            deletedDuplicates.map(item=>(
                <TaskHeaderOption navigation={navigation} key={item} class={item}/>
            ))
        }

    </View>
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