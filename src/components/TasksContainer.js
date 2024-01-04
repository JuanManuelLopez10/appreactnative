import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TasksSubclasses from './TasksSubclasses'
import { ScrollView } from 'react-native'

const TasksContainer = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks).tasks
    const app = useSelector(state => state.app)

    
    let subclasses = []
    const searchOptions = () => {
        const coso = []
        tasks.map(task=> {
            if (coso.includes(item => item === task.subclass)==false && task.class===app.Option) {
                coso.push(task.subclass)
            }
        })
        subclasses= coso

    }
    searchOptions()
    const deleteDuplicates = (arr) => {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
    const deletedDuplicates = deleteDuplicates(subclasses)
    
  return (
    <ScrollView style={styles.TasksContainer} >
        {
            deletedDuplicates.map(item=>(
                <TasksSubclasses key={deletedDuplicates.indexOf(item)} subclass={item}/>
            ))
        }
    </ScrollView>
  )
}

export default TasksContainer

const styles = StyleSheet.create({
    TasksContainer:{
        width:'100%'
    }
})