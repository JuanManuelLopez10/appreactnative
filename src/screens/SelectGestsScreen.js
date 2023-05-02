import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLayoutEffect } from 'react'
import { getFriends } from '../store/actions/auth.actions'
import UserItem from '../components/UserItem'
import { addguest } from '../store/actions/asados.actions'

const SelectGestsScreen = () => {
    const dispatch = useDispatch()
    const myUser = useSelector(state=>state.auth)
    const myAsado = useSelector(state=>state.asado)


    useLayoutEffect(()=>{
      dispatch(getFriends(myUser.email))
    },[])

    const invite = (itemA) => {
      dispatch(addguest(itemA, myAsado))
      console.log(myAsado.invitados);

    }
    const renderItem = ({ item }) => (
      <UserItem item={item} useFor='Guests' onInvite={invite}/>
    )

  return (
    <View>
        <FlatList data={myUser.Friends} keyExtractor={item=>item.email} renderItem={renderItem}/>
    </View>
  )
}

export default SelectGestsScreen

const styles = StyleSheet.create({})