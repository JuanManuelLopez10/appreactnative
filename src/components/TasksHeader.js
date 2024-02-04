import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPixel } from '../../utils/normalize'
import TaskHeaderOption from './TaskHeaderOption'
import { useSelector } from 'react-redux'
import Colors from '../constants/Colors'

const TasksHeader = ({navigation}) => {
    const tasks = useSelector(state => state.tasks).tasks
    let tasksOptions = []
    const searchOptions = () => {
        const coso = []
        tasks.map(task=> {
            if (coso.includes(item => item === task.class)==false) {
                coso.push(task.class)
            }
        })
        tasksOptions= coso

    }
    searchOptions()
    const deleteDuplicates = (arr) => {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
    const deletedDuplicates = deleteDuplicates(tasksOptions)
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

export default TasksHeader

const styles = StyleSheet.create({
    TasksHeader:{
        display: 'flex',
        flexDirection:'row',
        height: heightPixel(60),
        width:'100%',
        backgroundColor:'#2c2c2c',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 8,
},
shadowOpacity: 0.46,
shadowRadius: 11.14,

elevation: 17,
    }
})