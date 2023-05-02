import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPixel, widthPixel } from '../../utils/normalize'

const ProfileImageOption = ({ item, onSelect, profile }) => {

    
    return (
        <TouchableOpacity style={[styles.viewProfile, {borderColor: profile.OptionImage===item.item.OptionImage ? 'blue' : 'white', borderWidth: profile.OptionImage===item.item.OptionImage ? 3 : 0 }]} onPress={() => onSelect(item.item)}>
            
            <Image style={styles.imageOption} src={`${item.item.OptionImage}`} />
            <Text style={styles.text}>{item.item.OptionTitle}</Text>
        </TouchableOpacity>
    )
}

export default ProfileImageOption

const styles = StyleSheet.create({
    viewProfile: {
        marginHorizontal: widthPixel(20),
        marginVertical: heightPixel(10),
        backgroundColor: 'white',
        paddingBottom: 3,
    },
    imageOption: {
        height: heightPixel(100),
        width: widthPixel(100)
    },
    text: {
        alignSelf: 'center'
    }
})