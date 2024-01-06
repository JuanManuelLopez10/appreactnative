import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '../screens/Index'
import { useDispatch, useSelector } from 'react-redux'
import { heightPixel, widthPixel } from '../../utils/normalize'
import Header from '../components/Header'
import { useEffect } from 'react'
import { getsubtasks, gettasks } from '../store/actions/tasks.actions'
import { verifyFinishedTask } from '../store/actions/auth.actions'
import TasksScreen from '../screens/TasksScreen'
import { changePage, changeTaskOption } from '../store/actions/app.actions'
import { ImageBackground } from 'react-native'
import SeasonScreen from '../screens/SeasonScreen'
import TasksHeader from '../components/TasksHeader'

const Stack = createNativeStackNavigator()

const TasksNavigation = ({ navigation }) => {
  const auth = useSelector(state=>state.auth)
  const ttasks = useSelector(state=>state.tasks)
  const tasks = ttasks.tasks
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(changeTaskOption('Fundamentos'))

  },[])
  // const completedArray = []
  // const coso = () => {
  //   if(tasks.length>0){
  //   tasks.map((task)=>{
  //     const whichtask = task.task
  //     auth.metrics.map((metric)=>{
  //       if (metric.class===whichtask && metric.value>=task.divisions) {
  //         const objeto = {
  //           id: task.id,
  //           completed: true,
  //           claimed: false           
  //         }
  //         completedArray.push(objeto)
  //       }
  //     })
  //  })
  // }
  // }
  // useEffect(()=>{
  //   dispatch(gettasks())
  //   dispatch(getsubtasks())
  //   coso()
  //   if (completedArray.length>0) {
  //     dispatch(verifyFinishedTask(completedArray, auth.email))      
  //   }
  // },[])


  return (
    <View style={styles.Container} >
    <ImageBackground source={require('../../assets/coso2.jpg')} style={{ flex: 1 }}>

        <Stack.Navigator initialRouteName="Fundamentos" >
            <Stack.Screen name="Progreso" component={SeasonScreen} options={{headerShown:true, header: ()=>(
              <>
              <Header auth={auth} navigation={navigation}/>
              <TasksHeader navigation={navigation}/>
              </>
            )}}/>
            <Stack.Screen name="Fundamentos" component={TasksScreen} options={{headerShown:true, header: ()=>(
              <>
              <Header auth={auth} navigation={navigation}/>
              <TasksHeader navigation={navigation}/>
              </>
              )}}/>      
                          <Stack.Screen name="Especiales" component={TasksScreen} options={{headerShown:true, header: ()=>(
              <>
              <Header auth={auth} navigation={navigation}/>
              <TasksHeader navigation={navigation}/>
              </>
              )}}/>       
        </Stack.Navigator>
        </ImageBackground>
        </View>

  )
}

export default TasksNavigation

const styles = StyleSheet.create({
  Logo:{
    width: widthPixel(90),
    height: widthPixel(40),
  },
  
  Imagen:{
    width: widthPixel(50),
    height: heightPixel(50),
    borderRadius:50
  },
  Container:{
    height: '100%',
    width:'100%',
    
  }
})