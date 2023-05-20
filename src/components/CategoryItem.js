import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { fontPixel, heightPixel, widthPixel } from '../../utils/normalize';

const CategoryItem = ({ item, SelectCategory }) => {
    return (
        <TouchableOpacity onPress={() => SelectCategory(item.title)} style={styles.Option}>
            <View style={[styles.ImageView, { backgroundColor: item.color }]}>
                <Image style={[styles.Image, { backgroundColor: item.color }]} source={{ uri: item.image }} />
            </View>
            <Text style={styles.Title}>{item.title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    Option: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        height: heightPixel(70),
        marginLeft: widthPixel(20),
        marginVertical: heightPixel(10)
    },
    ImageView: {
        height: heightPixel(65),
        width: widthPixel(65),
        alignSelf:'center',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    Image: {
        height: heightPixel(40),
        width: widthPixel(40),
        
    },
    Title: {
        alignSelf: 'center',
        marginLeft: widthPixel(20),
        fontSize: fontPixel(15)
    }
})