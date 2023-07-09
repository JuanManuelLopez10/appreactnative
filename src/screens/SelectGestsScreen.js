import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLayoutEffect } from 'react'
import { getFriends } from '../store/actions/auth.actions'
import { addguest } from '../store/actions/asados.actions'
import { Alert } from 'react-native'
import { Button } from 'react-native-elements'

const SelectGestsScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const myUser = useSelector(state=>state.auth)
    const myAsado = useSelector(state=>state.asado)
    const [Guests, setGuests] = useState([])

    useLayoutEffect(()=>{
      dispatch(getFriends(myUser.email))
    },[])

    const invite = (itemA) => {
      if (Guests) {
        if (Guests.includes(itemA)===true) {
          const filteredGuests = Guests.filter(item => item!==itemA)
          console.log(filteredGuests);
          setGuests(filteredGuests)
        }else{
          setGuests([...Guests, itemA])
        }
        
      }else{
        setGuests[itemA]
      }
      Guests
    }
    const ConfirmGuests = () => {
      dispatch(addguest(Guests))
      navigation.navigate('SelectOrder')
    }
    const renderItem = ({ item }) => (
      <Text>{item.Name}</Text>
    )

  return (
    <View style={styles.Screen}>
        <FlatList data={myUser.Friends} keyExtractor={item=>item.email} renderItem={renderItem}/>
        <Button title={'Confirmar'} onPress={()=>ConfirmGuests()} />

    </View>
  )
}

export default SelectGestsScreen

const styles = StyleSheet.create({
  Screen:{
    display: 'flex',
    justifyContent:'space-between',
    height: '100%'
  }
})