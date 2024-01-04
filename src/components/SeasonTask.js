import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { useDispatch, useSelector } from 'react-redux'
import { changeSubtaskSelected, changeTaskClaim } from '../store/actions/app.actions'
import ImageWithStyle from './ImageWithStyle'

const SeasonTask = ({task}) => {
    const user = useSelector(state => state.auth)
    const tasks = useSelector(state => state.tasks).tasks
    const app = useSelector(state => state.app)
    
    const dispatch = useDispatch()
    const expMetric = user.metrics[user.metrics.findIndex(item => item.class==='experience')]
    let claimed = false
    let comp
    
    const handleComp = () => {
        if (expMetric.value>=task.divisions) {
            comp = true
        }
        if (user.tasks.findIndex(f => f.id === task.id)!==-1) {
            claimed= true
        }
    }
    handleComp()
    const selectClaim = (a) =>{
        if (comp===true) {
        dispatch(changeTaskClaim(a))
        }
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

    
    if (claimed===false) {
        const [open, setOpen] = useState(false)

        return (
            <TouchableOpacity onPress={()=>{
                selectClaim(task)
                setOpen(open===true ? false : true)
                }} style={[styles.conteiner,{backgroundColor: comp===true ? 'rgba(230, 230, 230, 0.5)' : 'none'}]}>
            <View style={styles.Task} >
                <View style={styles.Header} >
                    <Text style={styles.titulo} >{task.title}</Text>
                </View>
                <Text style={styles.description}>{task.description}</Text>

            </View>
            {
                    open===true
                    ?<ImageWithStyle style={{width:widthPixel(100), heightPixel:widthPixel(100)}} gift={task.gift}/>
                    : ''
                }
            </TouchableOpacity>
          )        
    }else{
        return (
            <View style={[styles.conteiner,{backgroundColor:'rgba(230, 230, 230, 0.8)'}]}>
            <View style={styles.Task} >
                <View style={styles.Header} >
                    <Text style={styles.titulo} >{task.title}</Text>
                </View>
                <Text style={styles.description}>{task.description}</Text>
            </View>
            </View>
          )
    }

}

export default SeasonTask

const styles = StyleSheet.create({
    conteiner:{
        width:'100%',        
        borderBottomColor:'blue',
        borderBottomWidth:1,

    },
    Task:{
        height:heightPixel(140),
        width:'85%',
        display:'flex',
        marginLeft:'5%'
    },
    titulo:{
        color:'white',
        fontSize:fontPixel(20),
        fontWeight:'600',
        width:'60%',
        marginVertical:'4%'
    },
    Header:{
        width:'100%',
        alignSelf:'center',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row'

    },
    description:{
        color:'white'
    }
})