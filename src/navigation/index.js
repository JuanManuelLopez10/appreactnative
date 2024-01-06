import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavigator'
import AuthNavigator from './AuthNavigator'
import { deleteUser } from '../db'
import { ScrollView } from 'react-native'
import { heightPixel } from '../../utils/normalize'

export default () => {
    const [user, setUser] = useState(null)
    user
    ?console.log(user)
    :''

    return (
        <NavigationContainer>
            {
                user
                ? TabsNavigator
                : AuthNavigator
            }
        </NavigationContainer>
    )
}

