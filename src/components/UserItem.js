import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { heightPixel, widthPixel } from '../../utils/normalize'

const UserItem = ({ item, onSelect, useFor, onInvite }) => {
    console.log(item);
    return (
    <View>

        {
            useFor==='Guests'
            ?        <View style={styles.Option} >
            <Image style={styles.Image} source={{ uri: item.Profile.OptionImage }} />
            <View>
                <Text>{item.NickName}</Text>
                <Text>{item.Name}</Text>
                <Text>{item.email}</Text>
            </View>

                <TouchableOpacity onPress={()=>onInvite(item)}>
                    <Text>Invitar</Text>
                </TouchableOpacity>


        </View>
            : <TouchableOpacity style={styles.Option} onPress={()=>onSelect(item)}>
            <Image style={styles.Image} source={{ uri: item.Profile.OptionImage }} />
            <View>
                <Text>{item.NickName}</Text>
                <Text>{item.Name}</Text>
                <Text>{item.email}</Text>
            </View>

        </TouchableOpacity>
        }
    </View>
  )
}

export default UserItem

const styles = StyleSheet.create({
    Option: {
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        height: heightPixel(100)
    },
    Image: {
        height: heightPixel(90),
        width: widthPixel(90)
    }
})