import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize'
import { Button } from 'react-native-elements'

const UserItem = ({ item, onSelect, useFor, onInvite, Guests }) => {
    return (
        <View>

            {
                useFor === 'Guests'
                    ?
                    <View style={styles.Option} >
                        <View style={{width:'80%', display:'flex', flexDirection:'row'}}>
                        <Image style={styles.Image} source={{ uri: item.Profile.OptionImage }} />
                        <View style={styles.Information} >
                            <Text style={styles.Nickname}>{item.NickName}</Text>
                            <Text style={styles.Name}>{item.Name} {item.Surname}</Text>
                            <Text style={styles.email}>{item.email}</Text>

                        </View>
                        </View>
                        <TouchableOpacity style={styles.InviteButton} onPress={() => onInvite(item)}>
                            {
                                Guests.includes(item)===true
                                ?<Text>Desinvitar</Text>
                            :<Text>Invitar</Text>
                             
                            }
                        </TouchableOpacity>
                    </View>
                    : <TouchableOpacity style={styles.Option} onPress={() => onSelect(item)}>
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
        width: '100%',
        height: heightPixel(90)
    },
    Image: {
        height: heightPixel(90),
        width: widthPixel(90),
        borderRadius: 100,
        alignSelf: 'center'
    },
    Information: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: widthPixel(10)
    },
    Nickname: {
        fontSize: fontPixel(20)
    },
    Name: {
        fontSize: fontPixel(13.5)
    },
    email: {
        fontSize: fontPixel(11)
    },
    InviteButton: {
        alignSelf:'center'
    }
})