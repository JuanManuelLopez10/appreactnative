import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { changeTaskClaim } from '../store/actions/app.actions'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import TaskSubclassModalGiftImage from './TaskSubclassModalGiftImage'
import ClaimButton from './ClaimButton'
import { ImageBackground } from 'react-native'

const TaskClaim = () => {
    const task = useSelector(state => state.app).TaskClaim

    const dispatch = useDispatch()
    const close = () =>{
        dispatch(changeTaskClaim(undefined))
    }

  return (
    <View style={styles.back} > 

    <View style={styles.TaskClaim} >
    <ImageBackground source={require('../../assets/options-back.jpg')} style={{ flex: 1 }}>

        <View style={styles.Head}>
        <Text style={styles.reclama} >Reclamá tu recompensa</Text>
        <TouchableOpacity onPress={()=>{
            close()
        }}>
            <Ionicons name={'close'} style={{color:'white'}} size={fontPixel(30)} />
        </TouchableOpacity>
        </View>
        <View style={styles.Body}>
            <TaskSubclassModalGiftImage task={task.title} />
            <ClaimButton task={task} />
        </View>
    </ImageBackground>
    </View>
    </View>
  )
}

export default TaskClaim

const styles = StyleSheet.create({
    Body:{
        display:'flex',
        alignItems:'center'
    },
    reclama:{
        fontSize:fontPixel(25),
        color:'white',
        marginBottom:heightPixel(50)
    },
    back:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Ajusta el color y la opacidad del sobrefondo aquí
        height:heightPixel(5000)
        },
    TaskClaim:{
        position:'absolute',
        width:widthPixel(300),
        backgroundColor:Colors.headerBackground,
        zIndex:200000,
        alignSelf:'center',
        top:heightPixel(100)
    },
    Head:{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:'2%',
        paddingVertical:'2%'
    }
})