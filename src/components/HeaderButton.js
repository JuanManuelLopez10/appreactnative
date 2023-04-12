import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderButtons } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

const HeaderButton = props => (

    <HeaderButtons
    {...props} iconComponent={Ionicons} iconSize={23} color={'blue'}
    />
)

export default HeaderButton

const styles = StyleSheet.create({})