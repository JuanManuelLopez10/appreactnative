import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import LoadGifts from '../screens/LoadGifts'
import LoadTasks from '../screens/LoadTasks'
import LoadSubtasks from '../screens/LoadSubtasks'

const Stack = createNativeStackNavigator()

const LoadItemsNavigator = ({ navigation }) => {
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

  // ,
  // "development": {
  //   "developmentClient": true,
  //   "distribution": "internal"
  // },
  // "production": {}
  
  return (

    <View style={styles.Container} >
        <Stack.Navigator initialRouteName="LoadGifts" >
            <Stack.Screen name="LoadGifts" component={LoadGifts} options={{headerShown:true, header: ()=>(
              <>
              <Header auth={auth} navigation={navigation}/>
              <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('LoadGifts')}} > 
                <Text>
                  Gifts
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('LoadTasks')}} > 
                  <Text> Tasks </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('LoadSubTasks')}} > 
                  <Text> Subasks </Text>
                </TouchableOpacity>
              </View>
              </>
            )}}/>
                        <Stack.Screen name="LoadTasks" component={LoadTasks} options={{headerShown:true, header: ()=>(
              <>
              <Header auth={auth} navigation={navigation}/>
              <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('LoadGifts')}} > 
                <Text>
                  Gifts
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('LoadTasks')}} > 
                  <Text> Tasks </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('LoadSubTasks')}} > 
                  <Text> Subasks </Text>
                </TouchableOpacity>
              </View>
              </>
            )}}/>
                                    <Stack.Screen name="LoadSubTasks" component={LoadSubtasks} options={{headerShown:true, header: ()=>(
              <>
              <Header auth={auth} navigation={navigation}/>
              <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('LoadGifts')}} > 
                <Text>
                  Gifts
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('LoadTasks')}} > 
                  <Text> Tasks </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('LoadSubTasks')}} > 
                  <Text> Subasks </Text>
                </TouchableOpacity>
              </View>
              </>
            )}}/>

        </Stack.Navigator>
        </View>

  )
}

export default LoadItemsNavigator

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