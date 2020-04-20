import * as React from 'react'
import MainScreen from './Main'
import MeetScreen from './Meet'
import { createStackNavigator } from '@react-navigation/stack'
import { colors, screens } from '../utils/constants'

const { MAIN, MEET } = screens

const Stack = createStackNavigator()

function App() {
    return (
        <Stack.Navigator initialRouteName={MAIN} screenOptions={headerCommonsOptions}>
            <Stack.Screen name={MAIN} component={MainScreen} />
            <Stack.Screen name={MEET} component={MeetScreen} />
        </Stack.Navigator>
    )
}

const headerCommonsOptions = {
    headerStyle: {
        backgroundColor: colors.background,
    },
    headerTintColor: colors.primary,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

export default App