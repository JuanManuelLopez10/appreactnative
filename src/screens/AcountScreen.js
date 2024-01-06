// import { FlatList, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Modal } from 'react-native'
// import React, { useState } from 'react'
// import ImageSelector from '../components/ImageSelector'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useDispatch, useSelector } from 'react-redux'
// import { logout, signupothers, verifyUserNickname } from '../store/actions/auth.actions'
// import { Ionicons } from '@expo/vector-icons'
// import { Image } from 'react-native-elements'
// import ProfileImageOption from '../components/ProfileImageOption'
// import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
// import Colors from '../constants/Colors'
// import { useLayoutEffect } from 'react'

// const AcountScreen = ({navigation}) => {
//     const dispatch = useDispatch()
//     const exist = useSelector(state => state.users)
//     const user = useSelector(state => state.auth)

//     const [openImageSelector, setopenImageSelector] = useState(false)
//     const [Profile, setProfile] = useState(OPTIONSIMAGE[0])
//     const [NickName, setNickName] = useState(user.NickName)
//     const [userName, setUserName] = useState(user.Name)
//     const [userSurname, setserSurname] = useState(user.Surname)
    

//     const ifuserexists = () => {
//         if (user.Profile) {
//             setProfile(user.Profile)

//         }
//     }
//     const selectProfile = (item) => {
//         setProfile(item)
//     }
//     const handleChangedNicknameText = (text) => {
//         dispatch(verifyUserNickname(text))

//         setNickName(text)
//     }
//     const handleChangedNameText = (text) => {
//         setUserName(text)
//     }
//     const handleChangedSurnameText = (text) => {
//         setserSurname(text)
//     }

//     const renderOptionItem = (data) => {
//         return (
//             <ProfileImageOption item={data} onSelect={selectProfile} profile={Profile} />
//         )
//     }
//     const saveUserEspecifications = () => {
//         if (userName && userSurname && NickName && Profile)
//         dispatch(signupothers(user.email, userName, userSurname, NickName, Profile))
//     }
//     const loggout = () => {
//         dispatch(logout())
//     }
    
//     return (
//         <>
//             <View style={styles.Screen} onLayout={()=>ifuserexists()}>
//                 <View style={styles.header}>
//                     <TouchableOpacity style={[styles.ProfileImageSelectorButton]} onPress={() => setopenImageSelector(true)} >
//                         <Image style={{ height: 200, width: widthPixel(200), height: heightPixel(200) }} source={{ uri: Profile.OptionImage }} />
//                     </TouchableOpacity>
//                     <View>
//                         <Text style={styles.userName}>{userName ? userName + ' ' + userSurname : 'Sin nombre aun'}</Text>
//                         {/* <TextInput style={styles.userName} placeholder={user.name ? user.name : 'Sin nombre aun'} onChangeText={handleChangedNameText}/> */}
//                         <Text style={styles.userEmail}>{user.email}</Text>

//                     </View>
//                 </View>
//                <View style={styles.body}>

//                 <View style={styles.InputView}>
//                         <Text style={styles.InputLabel}>Avatar seleccionado:</Text>
//                         <Text style={styles.InputDescription}>{Profile.OptionTitle}</Text>

//                 </View>
//                 <View style={styles.InputView}>
//                         <Text style={styles.InputLabel}>Nombre:</Text>
//                         <TextInput  style={styles.InputDescription} placeholder='Nombre' onChangeText={handleChangedNameText} />
//                     {
//                         exist.exist === true
//                             ? <Text>Usuario existente</Text>
//                             : ''
//                     }
//                 </View>
//                 <View style={styles.InputView}>
//                         <Text style={styles.InputLabel}>Apodo:</Text>
//                         <TextInput  style={styles.InputDescription} placeholder='Apellido' onChangeText={handleChangedSurnameText} />
//                     {
//                         exist.exist === true
//                             ? <Text>Usuario existente</Text>
//                             : ''
//                     }
//                 </View>
//                 <View style={styles.InputView}>
//                         <Text style={styles.InputLabel}>Apodo:</Text>
//                         <TextInput  style={styles.InputDescription} placeholder='Apodo' onChangeText={handleChangedNicknameText} />
//                     {
//                         exist.exist === true
//                             ? <Text>Usuario existente</Text>
//                             : ''
//                     }
//                 </View>
//                 <TouchableOpacity onPress={() => saveUserEspecifications()}>
//                     <Text>Guardar</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={loggout}>
//                     <Text>Cerrar sesión</Text>
//                 </TouchableOpacity>
//                 </View>
//                 <Modal transparent={true} visible={openImageSelector}>
//                     <View style={styles.ModalScreen}>
//                         <Text style={styles.ModalTitle}>Selecciona la imagen de perfil</Text>
//                         {
//                             Profile
//                                 ? <View style={{ height: heightPixel(100), width: '100%' }}>
//                                     <Text style={styles.OptionSelected}>Seleccionaste: {Profile.OptionTitle}</Text>
//                                     <Text style={styles.OptionDescription}>{Profile.Description}</Text>
//                                 </View>
//                                 : ''
//                         }
//                         <View style={styles.listaview}>
//                             <FlatList numColumns={2} data={OPTIONSIMAGE} animationType="slide" keyExtractor={item => item.OptionTitle} renderItem={renderOptionItem} />
//                         </View>
//                         <Button title='Aceptar' onPress={() => setopenImageSelector(false)} />
//                     </View>
//                 </Modal>
//             </View>
//         </>
//     )
// }

// export default AcountScreen

// const styles = StyleSheet.create({
//     Screen: {
//         display: 'flex',
//         alignItems: 'center'
//     },
//     header: {
//         height: heightPixel(370),
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'flex-end',
//         paddingBottom: heightPixel(40),
//         backgroundColor: Colors.primary,
//         paddingTop: heightPixel(30)
//     },
//     body: {
//         width: '100%',
//         paddingTop: heightPixel(5)
//     },
//     userName: {
//         fontSize: fontPixel(30),
//         alignSelf: 'center'
//     },
//     userEmail: {
//         fontSize: fontPixel(20),
//         alignSelf: 'center',
//         marginTop: heightPixel(10)
//     },
//     ProfileImageSelectorButton: {
//         height: heightPixel(200),
//         width: widthPixel(200),
//         alignSelf: 'center',
//         borderRadius: 200,
//         overflow: 'hidden',
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 6,
//         },
//         shadowOpacity: 0.37,
//         shadowRadius: 7.49,

//         elevation: 12,
//         marginBottom: heightPixel(20)
//     },
//     InputView: {
//         width: '100%',
//         borderBottomColor: 'grey',
//         borderBottomWidth: 1,
//         padding: 10
//     },
//     InputLabel: {
//         fontSize: fontPixel(12),
//         color: 'grey',
//         marginBottom: heightPixel(3)
//     },
//     InputDescription: {
//         fontSize: fontPixel(20)
//     },
//     ModalScreen: {
//         height: heightPixel(750),
//         display: 'flex',
//         alignItems: 'center',
//         width: widthPixel(340),
//         paddingHorizontal: widthPixel(10),
//         paddingVertical: heightPixel(10),
//         overflow: 'scroll',
//         margin: 30,
//         backgroundColor: 'white',
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 6,
//         },
//         shadowOpacity: 0.37,
//         shadowRadius: 7.49,

//         elevation: 12,
//     },
//     ModalTitle: {
//         fontSize: fontPixel(22),
//         alignSelf: 'flex-start',
//         fontWeight: '800',
//         marginTop: heightPixel(15),
//         marginBottom: heightPixel(10)
//     },
//     OptionSelected: {
//         fontSize: fontPixel(20),
//         alignSelf: 'flex-start',
//         marginBottom: heightPixel(10),
//         fontWeight: '500'
//     },
//     OptionDescription: {
//         fontSize: fontPixel(15),
//         alignSelf: 'flex-start',
//         marginBottom: heightPixel(10)
//     }
// })

import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, FlatList, ImageBackground, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import Colors from '../constants/Colors'
import { sendFriendRequest } from '../store/actions/users.actions'
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { OPTIONSIMAGE } from '../../data/usersOptions'
import ProfileImageOption from '../components/ProfileImageOption'
import { Button } from 'react-native'
import { logout, signupothers, verifyUserNickname } from '../store/actions/auth.actions'
import { TextInput } from 'react-native'

const SearchedUser = () => {
    const item = useSelector(state => state.auth)
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [openImageSelector, setopenImageSelector] = useState(false)
    const [Profile, setProfile] = useState(OPTIONSIMAGE[0])
    const [userName, setUserName] = useState(user.Name)

    const sendRequest = () => {
        dispatch(sendFriendRequest(myUser, item.id, 'Friendship'))
    }
     const loggout = () => {
         dispatch(logout())
         console.log('hh');
     }
     const saveUserEspecifications = () => {
         if (userName && Profile)
         dispatch(signupothers(user.email, userName, Profile))
     }
     const selectProfile = (item) => {
         setProfile(item)
     }

     const renderOptionItem = (data) => {
         return (
             <ProfileImageOption item={data} onSelect={selectProfile} profile={Profile} />
         )
     }
     const handleChangedNameText = (text) => {
         setUserName(text)
     }
     console.log(user.metrics);
    return (
        <>
            <SafeAreaView />
            <ImageBackground source={require('../../assets/coso2.jpg')} style={{ flex: 1 }}>

                
                <View style={styles.header}>


                     <TouchableOpacity style={[styles.ProfileImageSelectorButton]} onPress={() => setopenImageSelector(true)} >
                        <View style={[styles.ProfileImageSelectorImage, {
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,
                                    elevation: 12,
                        }]}>
                        <Image style={styles.ProfileImageSelectorImage} source={{ uri: Profile.OptionImage }} />
                        </View>
                         <Ionicons name='create' size={fontPixel(32)} color={Colors.primary} style={{position:'absolute', zIndex:3, bottom:-heightPixel(10), right:-widthPixel(2)}} />
                     </TouchableOpacity>
                     <View>
                            <TextInput style={styles.userName} placeholderTextColor={'grey'} placeholder={user.name ? user.name : 'Sin nombre aun'} onChangeText={handleChangedNameText}/> 
                     </View>
                     <View style={{height:'100%', width:widthPixel(70), marginRight:widthPixel(20), display:'flex', justifyContent:'center'}} >
                     <TouchableOpacity style={styles.Toucha} onPress={() => saveUserEspecifications()}>
                     <Text style={{color:'white', textAlign:'center', fontSize:fontPixel(12)}} >Guardar</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={[styles.Toucha, {backgroundColor:'grey'}]} onPress={loggout}>
                     <Text style={{color:'white', textAlign:'center', fontSize:fontPixel(12)}} >Cerrar sesión</Text>
                 </TouchableOpacity>
                     </View>
                     

                </View>


               <View style={styles.body}>
                        <View style={styles.FirstLook} >
                            <View style={styles.Stadistic} >
                                <Text style={styles.StadisticTitle}>Packs</Text>
                                {
                                    user.packs
                                    ?
                                    <Text style={styles.StadisticValue}>{user.packs.length}</Text>
                                    :
                                    <Text style={styles.StadisticValue}>0</Text>

                                }
                            </View>
                            <View style={styles.Stadistic} >
                                <Text style={styles.StadisticTitle}>Items</Text>
                                {
                                    user.gifts
                                    ?
                                    <Text style={styles.StadisticValue}>{user.gifts.length}</Text>
                                    :
                                    <Text style={styles.StadisticValue}>0</Text>

                                }
                            </View>
                            <View style={styles.Stadistic} >
                                <Text style={styles.StadisticTitle}>Dinero</Text>
                                {
                                    user.packs
                                    ?
                                    <Text style={styles.StadisticValue}>{Math.floor(user.money)}</Text>
                                    :
                                    <Text style={styles.StadisticValue}>0</Text>

                                }
                            </View>
                        </View>
                        <Text style={styles.TituloEstadisticas} >Estadisticas</Text>
                        <ScrollView showsVerticalScrollIndicator style={{marginBottom:10, height:'auto'}} >
                        {/* {
                            user.metrics.map(metric => {
                                if (metric.day===undefined) {
                                    return(
                                        <View style={styles.Estadistica} >
                                            <Text style={styles.Metric} >{metric.name}:</Text>
                                            <Text style={styles.Metric} >{metric.value}</Text>
                                        </View>
                                    )
                                }
                            })
                        } */}
                        </ScrollView>
                        

                </View>
                 <Modal transparent={true} visible={openImageSelector}>
                     <View style={styles.ModalScreen}>
                         <Text style={styles.ModalTitle}>Selecciona la imagen de perfil</Text>
                         {
                             Profile
                                 ? <View style={{ height: heightPixel(100), width: '100%' }}>
                                     <Text style={styles.OptionSelected}>Seleccionaste: {Profile.OptionTitle}</Text>
                                     <Text style={styles.OptionDescription}>{Profile.Description}</Text>
                                 </View>
                                 : ''
                         }
                         <View style={styles.listaview}>
                             <FlatList numColumns={2} data={OPTIONSIMAGE} animationType="slide" keyExtractor={item => item.OptionTitle} renderItem={renderOptionItem} />
                         </View>
                         <Button title='Aceptar' onPress={() => setopenImageSelector(false)} />
                     </View>
                 </Modal>

            </ImageBackground>
        </>
    )
}

export default SearchedUser

const styles = StyleSheet.create({
    Screen: {
        display: 'flex',
        alignItems: 'center'
    },
    Toucha:{
        width:'100%',
        backgroundColor:'blue',
        height:'25%',
        marginVertical:'10%',
        display:'flex',
        justifyContent:'center',
        borderRadius:heightPixel(50)
    },
    Estadistica:{
        height:heightPixel(50),
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:widthPixel(30),
        width:'100%',
        borderBottomColor:'white',
        borderBottomWidth:1
    },
    Metric:{
        fontSize:fontPixel(20),
        color:'white'
    },
    TituloEstadisticas:{
        fontSize:fontPixel(30),
        marginBottom:heightPixel(15),
        color:'white',
        marginLeft:widthPixel(10)
    },
    header: {
        height: heightPixel(100),
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        // paddingHorizontal:widthPixel(30),
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: Colors.darkGrey,
        overflow:'hidden',
        shadowColor: "#000",
        borderBottomWidth:heightPixel(2),
        borderBottomColor:'blue',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginBottom: heightPixel(20)
    },
    Stadistic:{
        marginHorizontal:'7%',
        width:'15%'
    },
    StadisticTitle:{
        fontSize:fontPixel(18),
        alignSelf:'center',
        color:'white'
    },
    StadisticValue:{
        fontSize:fontPixel(35),
        alignSelf:'center',
        color:'white'
    },
    body: {
        width: '100%',
        paddingTop: heightPixel(5)
    },
    FirstLook:{
        width:'100%',
        height:heightPixel(80),
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'

    },
    userName: {
        fontSize: fontPixel(20),
        alignSelf: 'center',
        color:'white',
        marginRight:widthPixel(90)
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
        height: heightPixel(50),
        width: heightPixel(50),
        marginTop:heightPixel(0),
        marginLeft:widthPixel(25),
    },
    ProfileImageSelectorImage:{
        height: '100%',
        width:'100%',
        borderRadius: 200,
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