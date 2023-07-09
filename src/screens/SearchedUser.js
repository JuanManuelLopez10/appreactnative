import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import Colors from '../constants/Colors'
import { sendFriendRequest } from '../store/actions/users.actions'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'

const SearchedUser = () => {
    const item = useSelector(state => state.users.searcheduser)
    const myUser = useSelector(state => state.auth) 
    const dispatch = useDispatch()
    const sendRequest = () => {
        dispatch(sendFriendRequest(myUser, item.id, 'Friendship'))
    }

    return (
        <>
            <SafeAreaView />
             <LinearGradient colors={[Colors.darkBackground, Colors.darksecondaryBackground]} start={{ x: 0, y: 0 }} style={[styles.Screen, {height:'100%'}]}>
                <View style={styles.header}>
                <LinearGradient colors={[Colors.darkBackground, Colors.darkthirdBackground]} start={{ x: 0, y: 0 }} style={styles.header}>
                    <View style={{height:heightPixel(70), width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Text style={{fontSize:fontPixel(20), color:'white'}} >Perfil</Text>
                    </View>

                    <View style={styles.ProfileImageSelectorButton}>
                        <Image style={[{width: widthPixel(120), height: heightPixel(120) }]} source={{ uri: item.Profile.OptionImage }} />
                    </View>
                    <View>
                        <Text style={styles.userName}>{item.Name} {item.Surname}</Text>
                        <Text style={[styles.userName,{fontSize:fontPixel(20), marginTop:heightPixel(5), color:'grey'}]}>{item.NickName}</Text>
                    </View>
                </LinearGradient>
                </View>

               <View style={styles.body}>
               <LinearGradient colors={[Colors.darkBackground, Colors.darkthirdBackground]} start={{ x: 0, y: 0 }} style={{width:widthPixel(340), height:heightPixel(100), alignSelf:'center', borderRadius: heightPixel(20)}}>
                <TouchableOpacity style={styles.bodyTouchable}>
                  <Ionicons name='people' size={fontPixel(50)} color={'grey'} />
                  <Text>AAA</Text>
                </TouchableOpacity>
                </LinearGradient>
                {/* <View style={styles.InputView}>
                        <Text style={styles.InputLabel}>Avatar seleccionado:</Text>
                        <Text style={styles.InputDescription}>{item.Profile.OptionTitle}</Text>

                </View>
                <View style={styles.InputView}>
                        <Text style={styles.InputLabel}>Nombre:</Text>
                        <Text style={styles.InputDescription}>{item.Name + ' ' + item.Surname}</Text>
                </View>
                <View style={styles.InputView}>
                        <Text style={styles.InputLabel}>Apodo:</Text>
                        <Text style={styles.InputDescription}>{item.NickName}</Text>

                </View>
                <View style={styles.InputView}>
                        <Text style={styles.InputLabel}>Descripción:</Text>
                        <Text style={styles.InputDescription}>{item.Profile.Description}</Text>

                </View> */}
                <TouchableOpacity onPress={()=>sendRequest()}>
                    <Text>Enviar solicitud de amistad</Text>
                </TouchableOpacity>
                </View>
            </LinearGradient>
        </>
    )
}

export default SearchedUser

const styles = StyleSheet.create({
    Screen: {
        display: 'flex',
        alignItems: 'center'
    },
    header: {
        height: heightPixel(420),
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: Colors.primary,
        borderBottomEndRadius:widthPixel(70),
        borderBottomStartRadius:widthPixel(70),
        overflow:'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginBottom: heightPixel(20)
    },
    body: {
        width: '100%',
        paddingTop: heightPixel(5)
    },
    userName: {
        fontSize: fontPixel(30),
        alignSelf: 'center',
        color:'white',
        marginTop:heightPixel(20)
    },
    bodyTouchable:{
    display: 'flex',
    paddingLeft:widthPixel(21),
    height:'100%',
    width:'100%',
    justifyContent:'flex-start',
    alignItems:'center',
    alignSelf:'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    },
    userEmail: {
        fontSize: fontPixel(20),
        alignSelf: 'center',
        marginTop: heightPixel(10)
    },
    ProfileImageSelectorButton: {
        height: heightPixel(120),
        width: widthPixel(120),
        marginTop:heightPixel(30),
        alignSelf: 'center',
        borderRadius: 200,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginBottom: heightPixel(20)
    },
    InputView: {
        width: '100%',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 10
    },
    InputLabel: {
        fontSize: fontPixel(12),
        color: 'grey',
        marginBottom: heightPixel(3)
    },
    InputDescription: {
        fontSize: fontPixel(20)
    },
    ModalScreen: {
        height: heightPixel(750),
        display: 'flex',
        alignItems: 'center',
        width: widthPixel(340),
        paddingHorizontal: widthPixel(10),
        paddingVertical: heightPixel(10),
        overflow: 'scroll',
        margin: 30,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    ModalTitle: {
        fontSize: fontPixel(22),
        alignSelf: 'flex-start',
        fontWeight: '800',
        marginTop: heightPixel(15),
        marginBottom: heightPixel(10)
    },
    OptionSelected: {
        fontSize: fontPixel(20),
        alignSelf: 'flex-start',
        marginBottom: heightPixel(10),
        fontWeight: '500'
    },
    OptionDescription: {
        fontSize: fontPixel(15),
        alignSelf: 'flex-start',
        marginBottom: heightPixel(10)
    }
})