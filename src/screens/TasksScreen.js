import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../store/actions/app.actions'
import TasksHeader from '../components/TasksHeader'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors'
import TasksContainer from '../components/TasksContainer'
import TasksSubclassModal from '../components/TasksSubclassModal'
import TaskClaim from '../components/TaskClaim'

const TasksScreen = () => {
    const auth = useSelector(state => state.auth)
    const app = useSelector(state => state.app)
    const dispatch = useDispatch()

  return (
    <ImageBackground source={require('../../assets/coso2.jpg')} style={{ flex: 1 }}>


    <View style={styles.Screen}>
        <TasksContainer/>
        {
          app.Subtaskselected
          ?<TasksSubclassModal key={app.Subtaskselected}/>
          :''
        }
        {
          app.TaskClaim
          ?<TaskClaim  key={'asasasa'}/>
          :''
        }
    </View>
    </ImageBackground>
  )
}

export default TasksScreen

const styles = StyleSheet.create({
    Screen:{
        width:'100%'
    }
})