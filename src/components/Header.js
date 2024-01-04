import React from 'react'
import { StyleSheet } from 'react-native'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image, Text } from 'react-native-elements'
import Colors from '../constants/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { addSession, reload, verifyFinishedTask } from '../store/actions/auth.actions'

const Header = ({ navigation, auth }) => {
  const app = useSelector(state => state.app)
  const user = useSelector(state => state.auth)
  const tasks = useSelector(state => state.tasks).tasks
  const dispatch = useDispatch()


  
  const refresh = () => {
    dispatch(addSession(user.email))
    dispatch(verifyFinishedTask(tasks, user.email))
    dispatch(reload(user.email))
  }

  return (
    <View style={styles.Header}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Cuenta')
      }}>
        <Image style={styles.ProfileImage} source={{ uri: auth.Profile.OptionImage }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{refresh()}}>
        <Text>AA</Text>
      </TouchableOpacity>
      <Text style={[styles.whiteText, styles.HeaderTitle]}>{app.page}</Text>
      <View style={styles.HeaderMoneyView}>
        <Ionicons style={[styles.whiteText]} name='cash' size={fontPixel(20)} />
        <Text style={{color:'white'}}>
        
          {Math.floor(auth.money)}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Header: {
    width: '100%',
    paddingHorizontal: '10%',
    paddingTop: heightPixel(20),
    height: heightPixel(100),
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.darkGrey,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderBottomWidth:heightPixel(3),
    borderBottomColor:Colors.lightBackground
  },
  HeaderMoneyView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  HeaderTitle:{
    fontSize: fontPixel(25)
  },
  ProfileImage: {
    height: heightPixel(50),
    width: heightPixel(50),
    marginRight: widthPixel(20),
    borderRadius: 100,
    borderColor: Colors.primary,
    borderWidth: 2
  },
  whiteText: {
    color: Colors.lightBackground
  }
})
export default Header