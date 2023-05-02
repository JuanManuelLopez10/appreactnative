import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native'
import { getNotifications } from '../store/actions/auth.actions'
import NotificationItem from '../components/NotificationItem'
import { heightPixel } from '../../utils/normalize'
import { confirmRequest } from '../store/actions/users.actions'

const NotificationsScreen = () => {
    const dispatch = useDispatch()
    const myUser = useSelector(state=>state.auth)
    const notifications = myUser.notifications

    const getnotif = () => {
        dispatch(getNotifications(myUser.email)) 
    }
    
    const confirm = (authforrequestaction, useSenderforrequestaction) => {
        dispatch(confirmRequest(authforrequestaction, useSenderforrequestaction))
      }

    const renderNotification = (data) => {
        return(
        <NotificationItem item={data.item} onSelect={confirm} getnotif={getnotif} auth={myUser}/>
        )
      }
    return (
    <View style={styles.Screen} onLayout={()=>getnotif()}>
        <SafeAreaView/>
        <View>
            {
                notifications
                ?<FlatList data={notifications} keyExtractor={item => item.UserSender.email} renderItem={renderNotification}/>
                : console.log('No hay')
            }
        </View>
    </View>
  )
}

export default NotificationsScreen

const styles = StyleSheet.create({
    Screen: {
        height: '100%',
        width: '100%',
        paddingTop: heightPixel(30)
    }
})