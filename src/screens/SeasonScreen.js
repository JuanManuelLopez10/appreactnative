import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImageBackground } from 'react-native'
import Colors from '../constants/Colors'
import { fontPixel, heightPixel } from '../../utils/normalize'
import ImageWithStyle from '../components/ImageWithStyle'
import SeasonTask from '../components/SeasonTask'
import TaskClaim from '../components/TaskClaim'
import { Ionicons } from '@expo/vector-icons'
import { changeTaskClaim } from '../store/actions/app.actions'
// import SeasonTask from '../components/SeasonTask'

const SeasonScreen = ({navigation}) => {
  const tasks = useSelector(state => state.tasks).tasks
  const user = useSelector(state => state.auth)
  const subtasks = useSelector(state => state.tasks).subtasks
  const app = useSelector(state => state.app)
  const dispatch = useDispatch()

  const selectClaim = (a) =>{
      dispatch(changeTaskClaim(a))
  }
  const close = () => {
      dispatch(changeSubtaskSelected(undefined))
  }
  const arrayoftasks = []
  tasks.map(task => {
      if (task.subclass==='Progreso') {
          arrayoftasks.push(task)
      }
  })
  arrayoftasks.map(task => {
    let isCompleted 
      const findCompleted = ()=>{
          user.tasks.map(item=>{
              if (item.id === task.id) {
                  isCompleted=true
                  if (item.claimed === true) {
                      const index = arrayoftasks.findIndex(ite => ite.title===task.title)
                      const el = arrayoftasks[index]
                      arrayoftasks.splice(index, 1)
                      arrayoftasks.push(el)
                  }
              }
          })
      }
      findCompleted()
  })
  
return (
  <ImageBackground source={require('../../assets/coso2.jpg')} style={{ flex: 1 }}>

  <ScrollView style={{marginBottom:heightPixel(10)}} contentContainerStyle={{ width: '100%'}} >

      <View style={styles.taskscontainer} >
      {
          arrayoftasks.map(task => {
              let isCompleted 
              let isClaimed
                  user.tasks.map(item=>{
                      if (item.id === task.id) {
                          isCompleted=true
                          if (item.claimed === true) {
                              isClaimed= true
                          }
                      }
                  })
                  if (isClaimed===true) {
                    console.log(task.gift);

                      return(
                          <View key={task.title+task.id+'nonosss'} style={[styles.Tassk, {backgroundColor:isCompleted===true ? 'white' : 'none', borderTopColor: isCompleted===true ? 'black' : 'white', borderBottomColor: isCompleted===true ? 'black' : 'white'}]} >
                              <Text style={[styles.TasskTitle,{color:isCompleted===true ? 'black' : 'white'}]} >{task.title}</Text>
                              <Ionicons name={isClaimed===false ? 'gift' : 'checkmark-circle'} size={fontPixel(25)} style={{color: isCompleted===true ? 'green' : 'white'}}/>
                          </View>
                      )
      
                  }else if(isCompleted!==true){
                      const [isopen, setIsOpen] = useState(false)
                      return(
                          <>
                          <TouchableOpacity key={task.title+'nono'+task.id} onPress={()=>{isopen===false ? setIsOpen(true) : setIsOpen(false)}}  style={[styles.Tassk, {flexDirection:'column', alignItems:'flex-start',backgroundColor:isCompleted===true ? 'white' : 'none', borderTopColor: isCompleted===true ? 'black' : 'white', borderBottomColor: isCompleted===true ? 'black' : 'white'}]} >
                              <View style={[styles.Tassk, {borderTopWidth:0, width:'100%', paddingHorizontal:0, borderBottomWidth:0}]} >
                                  <Text style={[styles.TasskTitle,{color:isCompleted===true ? 'black' : 'white'}]} >{task.title}</Text>
                          <Text style={[styles.TasskTitle,{color:isCompleted===true ? 'black' : 'white'}]} >{task.description}</Text>

                                  <Ionicons name={isClaimed===false ? 'gift' : 'checkmark-circle'} size={fontPixel(25)} style={{color: isCompleted===true ? 'green' : 'white'}}/>
                              </View>
                              {
                              isopen===true
                              ?
                              <>
                              <Text key={task.title} style={styles.Taskdescription}>{task.description}</Text>
                              {/* <ImageWithStyle style={{height:heightPixel(35), marginVertical:heightPixel(5) ,width:widthPixel(35)}} gift={task.gift}/> */}
                              </>
                              :''
                              }
                          </TouchableOpacity>

                          </>
                      )
              }else{
                console.log(task.gift);

                  return(
                      <TouchableOpacity key={task.title+'seee'+task.id} onPress={()=>{
                          selectClaim(task)
                      }} style={[styles.Tassk, {backgroundColor:isCompleted===true ? 'white' : 'none', borderTopColor: isCompleted===true ? 'black' : 'white', borderBottomColor: isCompleted===true ? 'black' : 'white'}]} >
                          <Text style={[styles.TasskTitle,{color:isCompleted===true ? 'black' : 'white'}]} >{task.title}</Text>
                          <Text style={[styles.TasskTitle,{color:isCompleted===true ? 'black' : 'white'}]} >{task.description}</Text>

                          <Ionicons name={isCompleted===true ? 'gift' : 'checkmark-circle'} size={fontPixel(25)} style={{color: isCompleted===true ? 'green' : 'white'}}/>
                      </TouchableOpacity>
                  )
              }
          })
      }
      </View>
      {
                  app.TaskClaim
                  ?<TaskClaim  key={'asasasa'}/>
                  :''
                
      }
  </ScrollView>
      </ImageBackground>
)
}



export default SeasonScreen

const styles = StyleSheet.create({
  Tassk:{
    height:heightPixel(140),
    width:'85%',
    display:'flex',
    marginLeft:'5%'
  },
  leftSide:{
    height:'100%',
    width:'5%',
    backgroundColor:Colors.darkBackground,
    marginLeft:'6%'
  },
  leftSideCompleted:{
    width:'100%',
    backgroundColor:'white',
    height:'5%'     
  }})