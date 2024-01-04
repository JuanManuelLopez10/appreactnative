import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { claim, reload, verifyFinishedTask } from '../store/actions/auth.actions'
import { changeSubtaskSelected, changeTaskClaim } from '../store/actions/app.actions'
import { fontPixel, heightPixel } from '../../utils/normalize'

const ClaimButton = ({task}) => {
    const user = useSelector(state => state.auth)
    const tasks = useSelector(state => state.tasks).tasks
    const dispatch = useDispatch()
    const claimtask = () =>{

        dispatch(claim(user.email, task.id, task.gift.type, task.gift.value))
        dispatch(reload(user.email))
      dispatch(changeTaskClaim(undefined))      
    }
  return (
    <TouchableOpacity style={styles.Button} onPress={() => {claimtask()}} >
      <Text style={styles.text} >Reclamar ahora</Text>
    </TouchableOpacity>
  )
}

export default ClaimButton

const styles = StyleSheet.create({
  Button:{
    width:'75%',
    display:'flex',
    borderRadius:heightPixel(100),
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'blue',
    height:heightPixel(40)
  },
  text:{
    textAlign:'center',
    fontSize:fontPixel(20),
    color:'white'
  }
})