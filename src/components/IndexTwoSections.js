import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import Colors from '../constants/Colors'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native-elements'
import { ImageBackground } from 'react-native'
Image
const IndexTwoSections = ({ navigation }) => {
    const user = useSelector(state => state.auth)
    const tasks = useSelector(state => state.tasks)
    
    
    const isunclaimed = []
    const verifyClimed = () => {     
        if (user.tasks) {
            user.tasks.map(item => {
                if (item.claimed === false) {
                    tasks.tasks.map(task=>{

                        if(task.id===item.id){
                            isunclaimed.push(task)
                        }
                    })
    
                }   
            })
    
        } 
    }
    
        verifyClimed()

    return (
        <View style={styles.IndexTwoSections} >
            <TouchableOpacity onPress={()=>navigation.navigate('TasksNavigation')} style={[styles.IndexSection, {backgroundColor:isunclaimed.length>0?Colors.lightBackground:'black'}]} >
            <ImageBackground source={isunclaimed.length>0 ? require('../../assets/options-back2.jpg') : require('../../assets/options-back.jpg')} style={{ flex: 1, height:'110%',width:'110%', marginTop:'-5%'}}>
            {
                isunclaimed.length && isunclaimed.length>0
                ?<>
                    <Text style={styles.IndexSectionTitle} >Objetivos</Text>
                    <Text style={styles.IndexSectionSubtitle}>Tienes {isunclaimed.length} objetivos sin reclamar</Text>
                    <Ionicons name={'gift'} size={fontPixel(110)} style={{color:'green', marginTop:'15%', alignSelf:'center'}}/>


                </>
                : <>
                    <Text style={styles.IndexSectionTitle} >Objetivos</Text>
                    <Text style={styles.IndexSectionSubtitle}>No hay objetivos cumplidos</Text>
                </>
            }
            </ImageBackground>
            </TouchableOpacity>
            {
                user.packs
                ?
                <TouchableOpacity onPress={()=>navigation.navigate('PacksNavigation')} style={[styles.IndexSection, {backgroundColor:user.packs.length>0?Colors.lightBackground:'black'}]} >
                    <ImageBackground source={user.packs.length>0 ? require('../../assets/options-back2.jpg') : require('../../assets/options-back.jpg')} style={{ flex: 1, height:'110%',width:'110%', marginTop:'-5%'}}>
            
                <Text style={styles.IndexSectionTitle} >Tus packs</Text>

                <Text style={styles.IndexSectionSubtitle}>{user.packs.length==0 ? 'No tenés packs para abrir' : `Tenés ${user.packs.length} packs para abrir`}</Text>
                </ImageBackground>
            </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=>navigation.navigate('PacksNavigation')} style={[styles.IndexSection, {backgroundColor:Colors.darkBackground}]} >
            <ImageBackground source={require('../../assets/options-back.jpg')} style={{ flex: 1, height:'110%',width:'110%', marginTop:'-5%'}}>
            
                <Text style={styles.IndexSectionTitle} >Tus packs</Text>

                <Text style={styles.IndexSectionSubtitle}>No tenés packs para abrir</Text>
            </ImageBackground>
            </TouchableOpacity>
            }

        </View>
    )
}

export default IndexTwoSections

const styles = StyleSheet.create({
    IndexTwoSections: {
        width: '99%',
        height: heightPixel(350),
        display: 'flex',
        flexDirection: 'row',
        padding: '1%',
        alignSelf:'center',
        justifyContent: 'space-around'
    },
    image:{
        height:heightPixel(200),
        width:widthPixel(200),
        zIndex:10,
        position:'absolute',
        left:0,
        right:0
    },
    IndexSection: {
        width: '40%',
        borderRadius: widthPixel(15),
        overflow:'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingVertical: '0%',
        position:'relative',
        shadowColor: "#000",
        height:'90%',
        marginTop:'5%',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    IndexSectionTitle:{
        color:'white',
        fontSize: fontPixel(11),
        marginTop:'15%',
        alignSelf:'center',
        marginBottom:'10%'
    },
    IndexSectionSubtitle:{
        color:'white', 
        width:'80%',       
        marginTop:'25%',
        textAlign:'center',
        alignSelf:'center',
        fontSize: fontPixel(18),
        marginTop:'3%'
    }
})