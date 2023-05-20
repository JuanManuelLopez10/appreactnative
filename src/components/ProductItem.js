import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { heightPixel, widthPixel } from '../../utils/normalize';

const ProductItem = ({ item, onSelect }) => {
    console.log(item.image);

    return (
        <TouchableOpacity onPress={()=>onSelect(item)} style={styles.product}>
            <Image style={styles.Image} source={{ uri: item.image }} />
            <View>
                <Text>{item.title}</Text>
                <Text>$ {item.price}</Text>
            </View>
            <View>

                <TextInput keyboardType='number-pad' placeholder='0'/>                
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    product: {
        backgroundColor: 'white',
        margin: 10,
        width: '95%',
        height: heightPixel(110),
        display: 'flex',
        flexDirection: 'row',
        elevation: 5,
        padding: 5,
        justifyContent: 'space-around'
    },
    Image: {
        height: heightPixel(80),   
        width: heightPixel(80),
        borderRadius: 100
        
    }
})