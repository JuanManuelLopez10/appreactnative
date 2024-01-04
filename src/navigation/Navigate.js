import { StyleSheet, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Index from '../screens/Index'
import { useDispatch, useSelector } from 'react-redux'
import { heightPixel, widthPixel } from '../../utils/normalize'
import Header from '../components/Header'
import { useEffect } from 'react'
import { gettasks } from '../store/actions/tasks.actions'
import { verifyFinishedTask } from '../store/actions/auth.actions'
import { changePage } from '../store/actions/app.actions'
import { ImageBackground } from 'react-native'

const Stack = createNativeStackNavigator()

const Navigate = ({ navigation }) => {
  const auth = useSelector(state=>state.auth)
  const ttasks = useSelector(state=>state.tasks)
  const tasks = ttasks.tasks
  
  // const completedArray = []
  // const coso = () => {
  //   if(tasks.length>0){
  //   tasks.map((task)=>{
  //     auth.metrics.map((metric)=>{
  //       if (metric.class===task.task && metric.value>=task.divisions) {
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
  // const dispatch= useDispatch()  
  // useEffect(()=>{
  //   dispatch(gettasks())
  //   coso()
  //   if (completedArray.length>0) {
  //     dispatch(verifyFinishedTask(completedArray, auth.email))      
  //   }
  // },[])


  return (

    <View style={styles.Container} >
        <Stack.Navigator initialRouteName="Index" >
            <Stack.Screen name="Index" component={Index} options={{headerShown:true, header: ()=>(
              <Header auth={auth} navigation={navigation}/>
            )}}/>
        </Stack.Navigator>
        </View>

  )
}

export default Navigate

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