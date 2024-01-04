import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { changeSubtaskSelected, changeTaskClaim } from '../store/actions/app.actions'
import Colors from '../constants/Colors'
import { Image } from 'react-native-elements'
import TaskSubclassModalGiftImage from './TaskSubclassModalGiftImage'
import { ScrollView } from 'react-native';
import TaskClaim from './TaskClaim'
import { useState } from 'react'
import { ImageBackground } from 'react-native'
import ImageWithStyle from './ImageWithStyle'

const TasksSubclassModal = () => {
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
        if (task.subclass===app.Subtaskselected) {
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
    <View key={app.Subtaskselected} style={styles.back} > 

    <View style={styles.Modal} key={app.Subtaskselected} >
    <ImageBackground style={[styles.Subclass, {flex: 1}]} source={require('../../assets/options-back2.jpg')} >
      <View style={styles.ModalHeader}>
        <Text style={styles.ModalHeaderTitle}>{app.Subtaskselected}</Text>
        <TouchableOpacity onPress={()=>{close()}}>    
            <Ionicons name={'close'} size={fontPixel(30)} style={{color:'white'}} />
        </TouchableOpacity>
      </View>
    <ScrollView style={{marginBottom:heightPixel(10)}} contentContainerStyle={{ width: '100%'}} >

      <Text style={styles.ModalMainGiftTitle}>Recompensa:</Text>      
      <View style={styles.ModalMainGift} >
        <TaskSubclassModalGiftImage task={app.Subtaskselected}/>
      </View>
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
                                    <Ionicons name={isClaimed===false ? 'gift' : 'checkmark-circle'} size={fontPixel(25)} style={{color: isCompleted===true ? 'green' : 'white'}}/>
                                </View>
                                {
                                isopen===true
                                ?
                                <>
                                <Text key={task.title} style={styles.Taskdescription}>{task.description}</Text>
                                <ImageWithStyle style={{height:heightPixel(35), marginVertical:heightPixel(5) ,width:widthPixel(35)}} gift={task.gift}/>
                                </>
                                :''
                                }
                            </TouchableOpacity>

                            </>
                        )
                }else{
                    return(
                        <TouchableOpacity key={task.title+'seee'+task.id} onPress={()=>{
                            selectClaim(task)
                        }} style={[styles.Tassk, {backgroundColor:isCompleted===true ? 'white' : 'none', borderTopColor: isCompleted===true ? 'black' : 'white', borderBottomColor: isCompleted===true ? 'black' : 'white'}]} >
                            <Text style={[styles.TasskTitle,{color:isCompleted===true ? 'black' : 'white'}]} >{task.title}</Text>
                            <Ionicons name={isCompleted===true ? 'gift' : 'checkmark-circle'} size={fontPixel(25)} style={{color: isCompleted===true ? 'green' : 'white'}}/>
                        </TouchableOpacity>
                    )
                }
            })
        }
        </View>
    </ScrollView>
    </ImageBackground>
    </View>
    </View>
  )
}

export default TasksSubclassModal

const styles = StyleSheet.create({
    Modal:{
        width:widthPixel(350),
        height:heightPixel(600),
        backgroundColor:Colors.darkBackground,
        position:'absolute',
        left:widthPixel(20),
        top:heightPixel(30)
    },
    back:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Ajusta el color y la opacidad del sobrefondo aquí
        height:heightPixel(5000)
        },
    ModalHeader:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:'3%'
    },
    ModalHeaderTitle:{
        color:'white',
        fontSize:fontPixel(40),
        fontWeight:'600'
    },
    ModalMainGift:{
        width:'100%',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        height:heightPixel(300),
        paddingHorizontal:'4%',
        paddingVertical:'2%'
    },
    ModalMainGiftTitle:{
        fontSize:fontPixel(23),
        marginLeft:widthPixel(10),
        marginVertical:heightPixel(10),
        color: 'white',
        fontWeight:'800'
    },
    taskscontainer:{
        width:'100%',
    },
    Tassk:{
        borderTopWidth:1,
        borderTopColor:'white',
        borderBottomWidth:1,
        borderBottomColor:'white',
        paddingHorizontal: '5%',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    TasskTitle:{
        color:'white',
        fontSize:fontPixel(20),
        marginVertical:heightPixel(15)
    },
    Taskdescription:{
        color:'white',
        fontSize:fontPixel(15),
        marginBottom:heightPixel(10)
    }
})