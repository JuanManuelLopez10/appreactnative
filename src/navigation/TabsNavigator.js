import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Navigate from './Navigate'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { LinearGradient } from 'expo-linear-gradient';
import { KeyboardAvoidingView } from 'react-native'
import SearchedUser from '../screens/AcountScreen'
import Header from '../components/Header'
import TasksNavigation from './TasksNavigation'
import { addSession, getsavedsignin, loadCompletedTasks, reload, verifyFinishedTask } from '../store/actions/auth.actions'
import { changePage } from '../store/actions/app.actions'
import { getsubtasks, gettasks } from '../store/actions/tasks.actions'
import { getPacks } from '../store/actions/packs.actions'
import PacksNavigation from './PacksNavigation'
import LoadItemsNavigator from './LoadItemsNavigator'

const BottomTabs = createBottomTabNavigator()

const TabsNavigator = ({navigation}) => {
  const user = useSelector(state => state.auth)
  const tasks = useSelector(state => state.tasks).tasks
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(gettasks())
    dispatch(getsubtasks())
    dispatch(addSession(user.email))
    dispatch(getPacks())

  },[])

  // const getCompleted = ()=>{
  //   dispatch(gettasks())
  //   dispatch(getsubtasks())
  //   dispatch(addSession(user.email))
  //   dispatch(getsavedsignin())

  //   const completedArray = []
    

  //   const coso = () => {
  //     if (tasks.length) {
  //     }else{
  //     }
  //     tasks.map((task)=>{
  //       const whichtask = task.task
  //       user.metrics.map((metric)=>{
  //         if (metric.class===whichtask && metric.value>=task.divisions) {
  //           const objeto = {
  //             id: task.id,
  //             completed: true,
  //             claimed: false           
  //           }
  //           if (completedArray.find(item => item=objeto)===undefined) {
  //             completedArray.push(objeto)              
  //           }
  //         }
  //       })
  //    })
    
  //   }
  //   dispatch(verifyFinishedTask(completedArray, user.email))      

  //   coso()
  
  //   let index 
  //   user.metrics.map(item=>{

  //     if(item.class){
  //       tasks.map(task=>{
  //         if (task.task===item.class && item.value>=task.divisions && user.tasks.find(item=>item.id===task.id)===undefined) {
  //           dispatch(loadCompletedTasks(user.email, task.id))
  //         }
  //       })
  //     }
  //   })
  // }
  //   dispatch(addSession(user.email))
  //   getCompleted()


  return (
    <KeyboardAvoidingView behavior='height' style={{height:'100%'}}>
    <BottomTabs.Navigator screenOptions={{ tabBarStyle: styles.Tabbar }} >
      <BottomTabs.Screen name='Inicio' component={Navigate} options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <LinearGradient colors={focused ? [Colors.primary, Colors.darkBackground] : ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={focused ? styles.TabbarOptionFocused : styles.TabbarOption}>
            <Ionicons name='md-home' size={fontPixel(20)} color={'white'} />
            <Text style={styles.Label}>Inicio</Text>
          </LinearGradient>
        )
      }} />
       <BottomTabs.Screen name='TasksNavigation' component={TasksNavigation} options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <LinearGradient colors={focused ? [Colors.primary, Colors.darkBackground] : ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={focused ? styles.TabbarOptionFocused : styles.TabbarOption}>
            <Ionicons name='checkmark-circle' size={fontPixel(25)} color={'white'} />
            <Text style={styles.Label}>Tareas</Text>
          </LinearGradient>
        )
      }} />
             <BottomTabs.Screen name='PacksNavigation' component={PacksNavigation} options={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <LinearGradient colors={focused ? [Colors.primary, Colors.darkBackground] : ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={focused ? styles.TabbarOptionFocused : styles.TabbarOption}>
            <Ionicons name='md-person' size={fontPixel(20)} color={'white'} />
            <Text style={styles.Label}>Tienda</Text>
          </LinearGradient>
        )
      }} />
            <BottomTabs.Screen name='Cuenta' component={SearchedUser} options={{
        tabBarShowLabel: false,
        
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <LinearGradient colors={focused ? [Colors.primary, Colors.darkBackground] : ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={focused ? styles.TabbarOptionFocused : styles.TabbarOption}>
            <Ionicons name='md-person' size={fontPixel(20)} color={'white'} />
            <Text style={styles.Label}>Cuenta</Text>
          </LinearGradient>
        )
      }} />
      {
        user.email==='26lopez.jm@gmail.com'
        ?
        <BottomTabs.Screen name='Load' component={LoadItemsNavigator} options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <LinearGradient colors={focused ? [Colors.primary, Colors.darkBackground] : ['rgba(0,0,0,0)', 'rgba(0,0,0,0)']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={focused ? styles.TabbarOptionFocused : styles.TabbarOption}>
              <Ionicons name='md-person' size={fontPixel(20)} color={'white'} />
              <Text style={styles.Label}>Hola</Text>
            </LinearGradient>
          )
        }} />
       :''
      }

    </BottomTabs.Navigator>
    </KeyboardAvoidingView>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  Label:{
    color:'white',
    fontSize:fontPixel(10)
  },
  changeTheme: {
    height: heightPixel(40),
    width: widthPixel(70),
    marginRight: widthPixel(30),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },

  Tabbar: {
    height: heightPixel(80),
    backgroundColor: Colors.darkGrey,
    paddingVertical: heightPixel(5)
  },
  TabbarOption: {
    position: 'relative',
    width: widthPixel(40),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPixel(50),
    marginTop:heightPixel(10),
    borderRadius: 30,
  },
  TabbarOptionFocused: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    
    alignItems: 'center',
    borderRadius: 1030,
    bottom: heightPixel(30),
    width: heightPixel(55),
    height: heightPixel(55),
    shadowColor: Colors.light,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  }
})