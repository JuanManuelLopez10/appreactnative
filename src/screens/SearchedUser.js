import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import Colors from '../constants/Colors'
import { sendFriendRequest } from '../store/actions/users.actions'

const SearchedUser = () => {
    const item = useSelector(state => state.users.searcheduser)
    const myUser = useSelector(state => state.auth) 
    console.log(myUser);
    const dispatch = useDispatch()
    const sendRequest = () => {
        dispatch(sendFriendRequest(myUser, item.id, 'Friendship'))
    }

    return (
        <>
            <SafeAreaView />
            <View style={styles.Screen}>
                <View style={styles.header}>
                    <View style={styles.ProfileImageSelectorButton}>
                        <Image style={[{ height: 200, width: widthPixel(200), height: heightPixel(200) }]} source={{ uri: item.Profile.OptionImage }} />
                    </View>
                    <View>
                        <Text style={styles.userName}>{item.Name + item.Surname}</Text>
                        {/* <TextInput style={styles.userName} placeholder={user.name ? user.name : 'Sin nombre aun'} onChangeText={handleChangedNameText}/> */}
                        <Text style={styles.userEmail}>{item.email}</Text>
                    </View>
                </View>



               <View style={styles.body}>

                <View style={styles.InputView}>
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

                </View>
                <TouchableOpacity onPress={()=>sendRequest()}>
                    <Text>Enviar solicitud de amistad</Text>
                </TouchableOpacity>
                </View>
            </View>
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