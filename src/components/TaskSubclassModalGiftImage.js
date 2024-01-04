import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Image } from 'react-native-elements'
import { fontPixel, heightPixel } from '../../utils/normalize'

const TaskSubclassModalGiftImage = ({task}) => {
    const app = useSelector(state => state.app)
    const subtasks = useSelector(state => state.tasks).subtasks
    const tasks = useSelector(state => state.tasks).tasks
    const packs = useSelector(state => state.packs).packs

    let eltask 
    const getTask = () => {
        subtasks.map(item => {
            if (item.title===task) {
                eltask= item
            }
        })
        tasks.map(item => {
            if (item.title===task) {
                eltask= item
            }
        })
    }
    
    getTask()

    

    if (eltask.gift.type==='money') {
        return(
            <>
        <Image style={styles.Image} source={require('../../assets/coin.png')} />
        <Text style={styles.Text} >{'$' + eltask.gift.value}</Text>
            </>
        )
    }else if(eltask.gift.type==='packs' ){
        let tipo
        let name
        packs.map(item=>{
            eltask.gift.value.map(value=>{
                if (item.id===value.id) {
                    tipo=item.type
                    name=item.title
                }
            })
        })
        if (tipo==='bronze') {
        return(
            <>
            <Image style={styles.Image} source={require('../../assets/bronze-pack.png')} />
            <Text style={styles.Text} >{name}</Text>
                </>
        )   
        }
    }
}

export default TaskSubclassModalGiftImage

const styles = StyleSheet.create({
    Image: {
        height: heightPixel(200),
        width: heightPixel(200),
        marginBottom:heightPixel(10),
        alignSelf:'center'
      },
      Text:{
        fontSize:fontPixel(25),
        color:'white',
        marginBottom:heightPixel(20)
      }
})