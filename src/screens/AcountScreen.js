import { FlatList, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import ImageSelector from '../components/ImageSelector'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { logout, signupothers, verifyUserNickname } from '../store/actions/auth.actions'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native-elements'
import { OPTIONSIMAGE } from '../../data/usersOptions'
import ProfileImageOption from '../components/ProfileImageOption'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import Colors from '../constants/Colors'
import { useLayoutEffect } from 'react'

const AcountScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const exist = useSelector(state => state.users)
    const user = useSelector(state => state.auth)

    const [openImageSelector, setopenImageSelector] = useState(false)
    const [Profile, setProfile] = useState(OPTIONSIMAGE[0])
    const [NickName, setNickName] = useState(user.NickName)
    const [userName, setUserName] = useState(user.Name)
    const [userSurname, setserSurname] = useState(user.Surname)
    

    const ifuserexists = () => {
        if (user.Profile) {
            setProfile(user.Profile)

        }
    }
    const selectProfile = (item) => {
        setProfile(item)
    }
    const handleChangedNicknameText = (text) => {
        dispatch(verifyUserNickname(text))

        setNickName(text)
    }
    const handleChangedNameText = (text) => {
        setUserName(text)
    }
    const handleChangedSurnameText = (text) => {
        setserSurname(text)
    }

    const renderOptionItem = (data) => {
        return (
            <ProfileImageOption item={data} onSelect={selectProfile} profile={Profile} />
        )
    }
    const saveUserEspecifications = () => {
        if (userName && userSurname && NickName && Profile)
        dispatch(signupothers(user.email, userName, userSurname, NickName, Profile))
    }
    const loggout = () => {
        dispatch(logout())
    }
    
    return (
        <>
            <View style={styles.Screen} onLayout={()=>ifuserexists()}>
                <View style={styles.header}>
                    <TouchableOpacity style={[styles.ProfileImageSelectorButton]} onPress={() => setopenImageSelector(true)} >
                        <Image style={{ height: 200, width: widthPixel(200), height: heightPixel(200) }} source={{ uri: Profile.OptionImage }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.userName}>{userName ? userName + ' ' + userSurname : 'Sin nombre aun'}</Text>
                        {/* <TextInput style={styles.userName} placeholder={user.name ? user.name : 'Sin nombre aun'} onChangeText={handleChangedNameText}/> */}
                        <Text style={styles.userEmail}>{user.email}</Text>

                    </View>
                </View>
               <View style={styles.body}>

                <View style={styles.InputView}>
                        <Text style={styles.InputLabel}>Avatar seleccionado:</Text>
                        <Text style={styles.InputDescription}>{Profile.OptionTitle}</Text>

                </View>
                <View style={styles.InputView}>
                        <Text style={styles.InputLabel}>Nombre:</Text>
                        <TextInput  style={styles.InputDescription} placeholder='Nombre' onChangeText={handleChangedNameText} />
                    {
                        exist.exist === true
                            ? <Text>Usuario existente</Text>
                            : ''
                    }
                </View>
                <View style={styles.InputView}>
                        <Text style={styles.InputLabel}>Apodo:</Text>
                        <TextInput  style={styles.InputDescription} placeholder='Apellido' onChangeText={handleChangedSurnameText} />
                    {
                        exist.exist === true
                            ? <Text>Usuario existente</Text>
                            : ''
                    }
                </View>
                <View style={styles.InputView}>
                        <Text style={styles.InputLabel}>Apodo:</Text>
                        <TextInput  style={styles.InputDescription} placeholder='Apodo' onChangeText={handleChangedNicknameText} />
                    {
                        exist.exist === true
                            ? <Text>Usuario existente</Text>
                            : ''
                    }
                </View>
                <TouchableOpacity onPress={() => saveUserEspecifications()}>
                    <Text>Guardar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={loggout}>
                    <Text>Cerrar sesión</Text>
                </TouchableOpacity>
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
            </View>
        </>
    )
}

export default AcountScreen

const styles = StyleSheet.create({
    Screen: {
        display: 'flex',
        alignItems: 'center'
    },
    header: {
        height: heightPixel(370),
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingBottom: heightPixel(40),
        backgroundColor: Colors.primary,
        paddingTop: heightPixel(30)
    },
    body: {
        width: '100%',
        paddingTop: heightPixel(5)
    },
    userName: {
        fontSize: fontPixel(30),
        alignSelf: 'center'
    },
    userEmail: {
        fontSize: fontPixel(20),
        alignSelf: 'center',
        marginTop: heightPixel(10)
    },
    ProfileImageSelectorButton: {
        height: heightPixel(200),
        width: widthPixel(200),
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