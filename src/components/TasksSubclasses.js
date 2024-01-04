import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import { changeSubtaskSelected } from '../store/actions/app.actions'
import { ImageBackground } from 'react-native'
import { useState } from 'react'

const TasksSubclasses = (props) => {
    const tasks = useSelector(state => state.tasks).tasks
    const auth = useSelector(state => state.auth)
    const app = useSelector(state => state.app)
    const subtasks = useSelector(state => state.tasks).subtasks
    const arrayoftasks = []
    const arrayofCompletedTasks = []
    const dispatch = useDispatch()
    const [claimed, setClaimed] = useState(undefined)


    const setSelected = (a) => {
        dispatch(changeSubtaskSelected(a))
    }

    const gettasks = () => {
        tasks.map(task => {
            if (task.subclass===props.subclass) {
                arrayoftasks.push(task)
                
                if (auth.tasks.find(item => item.id===task.id)) {
                    arrayofCompletedTasks.push(task)
                }
            }
        })
    }
    gettasks()
    let cosito = 'unclaimed'
    auth.tasks.map(task => {
        arrayoftasks.map(tas => {
            if(task.claimed===false && task.id===tas.id){
                cosito = claimed
            }
        })
    })
    return (
        <>
        <TouchableOpacity onPress={()=>{setSelected(props.subclass)}} style={styles.SubclassContain} >

        <ImageBackground style={[styles.Subclass, {flex: 1}]} source={ cosito==='unclaimed' ? require('../../assets/options-back.jpg') :  require('../../assets/options-back2.jpg')} >


            <View style={styles.SubclassHeader} >
                <Text style={styles.SubclassTitle}>{props.subclass}</Text>
            </View>
             <View style={styles.ProgressView} >
                 <Ionicons name={'checkmark-circle'} size={fontPixel(25)} />
                 <View style={styles.ProgressBar} >
                     <View style={{width:widthPixel(200/arrayoftasks.length*arrayofCompletedTasks.length), backgroundColor:'green', height:'100%', position:'absolute', left:0}} ></View>
                     <Text style={styles.ProgressBarText} >{arrayofCompletedTasks.length}/{arrayoftasks.length} Completado</Text>
                 </View>
             </View>
             <Text style={styles.SubclassDescription} >
                {subtasks[subtasks.findIndex(item => item.title === props.subclass)].description}
            </Text>
            <View style={styles.OptionContainer} >
            {
                arrayoftasks.map(task=>{
                    const IndexInUserTask = auth.tasks.findIndex(item => item.id === task.id)
                    const cl = auth.tasks[IndexInUserTask]
                    const IndexInMetrics = auth.metrics.findIndex(item => item.class === task.task)
                    let cantidad = auth.metrics[IndexInMetrics].value    //----------------------------HAY QUE CAMBIAR ESTO
                    if (IndexInUserTask!==-1) {
                        return(
                            <View key={task.id} style={[styles.Option, {backgroundColor:'white'}]}>
                            <Text style={[styles.OptionText, {color:'black'}]} >{cantidad}/{task.divisions}  {task.title}</Text>
                            <Ionicons name={cl.claimed===true ?'checkmark-circle' : 'gift'} size={fontPixel(25)} style={{color:'green'}}/>
                        </View>
                        )
                    }else{
                        return(
                        
                            <View key={task.id} style={styles.Option}>
                                <Text style={styles.OptionText} >{cantidad}/{task.divisions}  {task.title}</Text>
                                <Ionicons name={'checkmark-circle'} size={fontPixel(25)} />
                            </View>
                            )
                    }
                })
            }
            </View>
        </ImageBackground>
        </TouchableOpacity>

        </>






    // </TouchableOpacity>
  )
}

export default TasksSubclasses

const styles = StyleSheet.create({
    SubclassContain:{
        width:'90%',
        borderRadius:heightPixel(50),
        margin:'5%',
        height:heightPixel(380),
        overflow:'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
    Subclass:{
        padding:'3%',
        display:'flex',
        overflow:'scroll',

    },
    SubclassHeader:{
        paddingHorizontal:'5%',

        width:'100%',
        display:'flex',
    },
    SubclassTitle:{
        fontSize:fontPixel(35),
        fontWeight:'800',
        width:'90%',
        color:'white',
        marginBottom:'2%'
    },
    ProgressView:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        height:'10%',
    },
    ProgressBar:{
        paddingHorizontal:'5%',
        overflow:'hidden',
        backgroundColor:'grey',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:widthPixel(200),
        borderRadius:heightPixel(20),
        marginLeft:widthPixel(10),
        marginBottom:heightPixel(12),
        height:'80%'
    },
    ProgressBarText:{
        fontSize: fontPixel(14)
    },
    SubclassDescription:{
        color:'white',
        fontSize:fontPixel(15),
        height:'35%'
    },
    Option:{
        paddingVertical:heightPixel(10),
        paddingHorizontal:widthPixel(10),
        borderTopWidth:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    OptionText:{
        color:'white',
        fontSize:fontPixel(18)
    },
    OptionContainer:{
        height:'39%',        
        width:'100%',
        overflow:'hidden'
    }
})