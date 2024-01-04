import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSubtaskSelected, changeTaskOption } from '../store/actions/app.actions'
import Colors from '../constants/Colors'
import { fontPixel } from '../../utils/normalize'

const TaskHeaderOption = (props) => {
    const dispatch = useDispatch()
    const app = useSelector(state => state.app)

    const presss = () => {
      props.navigation.navigate(props.class)
      dispatch(changeTaskOption(props.class))
    }
  return (
    <TouchableOpacity style={[styles.Option, {backgroundColor: app.Option===props.class ? 'white' : '#2c2c2c'}]} onPress={()=>{presss(props.class)}}>
      <Text style={[styles.Text, {color: app.Option===props.class ? 'black' : 'white'}]}>{props.class}</Text>
    </TouchableOpacity>
  )
}

export default TaskHeaderOption

const styles = StyleSheet.create({
    Option:{
        marginLeft:'3%',
        backgroundColor:'red',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:'5%'
    },
    Text:{
      fontSize:fontPixel(15),
    }
})