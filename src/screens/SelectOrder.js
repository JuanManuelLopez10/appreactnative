import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CategoryItem from '../components/CategoryItem'
import { FlatList } from 'react-native'
import { CATEGORIES } from '../../data/Categories'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { selectCategory } from '../store/actions/products.actions'

const SelectOrder = ({navigation}) => {
    const categories = CATEGORIES
    const [SelectedCategory, setSelectedCategory] = useState('')
    const dispatch = useDispatch()
    
    const SelectCategory = (category) => {
        dispatch(selectCategory(category))
        navigation.navigate('Category')
    }

    const renderItem = ({ item }) => (
        <CategoryItem item={item} SelectCategory={SelectCategory}/>
      )

    return (
    <View>
        <TouchableOpacity style={styles.CalculoPressable}>
            <Text>Cálculo por persona</Text>
        </TouchableOpacity>
        <FlatList data={categories} keyExtractor={item=>item.id} renderItem={renderItem}/>
    </View>
    )
}

export default SelectOrder

const styles = StyleSheet.create({
    CalculoPressable: {

    }
})