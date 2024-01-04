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
import { changePage } from '../store/actions/app.actions'
import PacksScreen from '../screens/PacksScreen'
import PacksHeader from '../components/PacksHeader'
import MyNewItems from '../components/MyNewItems'
import { ImageBackground } from 'react-native'
import BuyPacksScreen from '../screens/BuyPacksScreen'

const Stack = createNativeStackNavigator()

const PacksNavigation = ({ navigation }) => {
  const auth = useSelector(state=>state.auth)
  const ttasks = useSelector(state=>state.tasks)
  const tasks = ttasks.tasks
  const dispatch = useDispatch()

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
        <Stack.Navigator initialRouteName="Mis packs" >
            <Stack.Screen name="Mis packs" component={PacksScreen} options={{headerShown:true, header: ()=>(
              <>
              <Header auth={auth} navigation={navigation}/>
              <PacksHeader navigation={navigation}/>
              </>
            )}}/>
            <Stack.Screen name="Comprar packs" component={BuyPacksScreen} options={{headerShown:true, header: ({focused})=>(
              <>
              <Header auth={auth} navigation={navigation}/>
              <PacksHeader navigation={navigation}/>
              </>
            )}}/>
            <Stack.Screen name="Mis items" component={MyNewItems} options={{headerShown:true, header: ({focused})=>(
              <>
              <Header auth={auth} navigation={navigation}/>
              <PacksHeader navigation={navigation}/>
              </>
            )}}/>
        </Stack.Navigator>
        </View>
  )
}

export default PacksNavigation

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