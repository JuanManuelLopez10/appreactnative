import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { searchusers, selectusersearched } from '../store/actions/users.actions';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';

const SearchScreen = ({navigation}) => {
    const user = useSelector(state=>state.auth)
    const users = useSelector(state=>state.users)
    const dispatch = useDispatch()
    const [Searched, setSearched] = useState('')
    const changeText = (text) => {
        setSearched(text)
        dispatch(searchusers(Searched, user))
        
    }
    const selectUser = (userSearched) => {
        dispatch(selectusersearched(userSearched))
    }
    const endEditing = ()=>{
        dispatch(searchusers(Searched, user))
    }
    return (
    <KeyboardAvoidingView>
    <LinearGradient colors={[Colors.darkBackground, Colors.darksecondaryBackground]} start={{ x: 0, y: 0 }} style={{height:'100%', padding:heightPixel(8)}}>
    <SafeAreaView/>   
    <TextInput value={Searched} onPressOut={()=>{endEditing()}} onEndEditing={()=>{endEditing()}} onChangeText={changeText} style={{backgroundColor:'white', width:'90%', alignSelf:'center', height:heightPixel(40), fontSize:fontPixel(20), paddingLeft:widthPixel(10)}}  placeholder={'Buscar amigos'}/>        
    <ScrollView>
        <View style={{display:'flex', alignItems:'center'}}>
        {
            Searched===''
            ? ''
            :
                users.results.map(item=>(
                    <TouchableOpacity style={styles.UserItem} key={item.id} onPress={()=>{
                        selectUser(item)
                        navigation.navigate('SearchedUser')
                    }} >
                        <Image style={styles.imageOption} src={`${item.Profile.OptionImage}`} />
                        <View>
                        <Text style={styles.NickName}>{item.NickName}</Text>
                        <Text style={styles.Name}>{item.Name} {item.Surname}</Text>

                        </View>
                    </TouchableOpacity>
                ))
        }
        </View>
    </ScrollView>    
    </LinearGradient>
    </KeyboardAvoidingView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    UserItem:{
        height:heightPixel(70),
        width: '95%',
        marginTop:heightPixel(25),
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    imageOption:{
        height:heightPixel(50),
        width:heightPixel(50),
        borderRadius:300,
        marginHorizontal: widthPixel(10)
    },
    NickName:{
        color:'white',
        fontSize: fontPixel(15)
    },
    Name:{
        color:'grey',
        fontSize: fontPixel(12)
    }
})