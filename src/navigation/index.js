import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabsNavigator from './TabsNavigator'
import AuthNavigator from './AuthNavigator'
import { deleteUser } from '../db'

export default () => {
    const [user, setUser] = useState(null)

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

