import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Approach from './screens/Approach'

const Stack = createNativeStackNavigator()

export const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Approach"
                component={Approach}
            />
        </Stack.Navigator>
    </NavigationContainer>
)