import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize';
import Colors from '../constants/Colors';


const NotificationItem = ({ item, onSelect, auth, getnotif }) => {
  const authforrequestaction = {
    Name: auth.Name,
    Surname: auth.Surname,
    NickName: auth.NickName,
    email: auth.email,
    Profile: auth.Profile,
    userId: auth.userId
  }
  const useSenderforrequestaction = {
    Name: item.UserSender.Name,
    Surname: item.UserSender.Surname,
    NickName: item.UserSender.NickName,
    email: item.UserSender.email,
    Profile: item.UserSender.Profile,
    userId: item.UserSender.userId
  }

  return (
    <View style={styles.NotificationView}>
      <Image style={styles.Image} source={{ uri: item.UserSender.Profile.OptionImage }} />
      <View style={styles.ViewBackText}>
        {
          item.Type === 'Friendship'
            ? <Text style={styles.NotificationText}>{item.UserSender.NickName} te ha enviado una solicitud de amistad</Text>
            : ''
        }
        <View style={styles.BottonsOptionsView}>
          <TouchableOpacity style={[styles.ButtonOption, {backgroundColor: Colors.light}]} onPress={()=>{
            onSelect(authforrequestaction, useSenderforrequestaction)
            getnotif()
            }}>
            <Text>Aceptar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonOption}>
            <Text>Rechazar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default NotificationItem

const styles = StyleSheet.create({
  NotificationView: {
    height: heightPixel(120),
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: widthPixel(10),
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  Image: {
    height: heightPixel(80),
    width: heightPixel(80),
    borderRadius: 100,
    marginRight: widthPixel(20)
  },
  NotificationText: {
    fontSize: fontPixel(17),
    width: '90%',
    height: '45%'
  },
  BottonsOptionsView: {
    height: '40%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  ButtonOption: {
    width: '30%',
    height: '60%',
    backgroundColor: Colors.primary,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  ViewBackText: {
    width: '80%',
  }
})