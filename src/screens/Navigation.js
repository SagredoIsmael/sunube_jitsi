import * as React from 'react'
import MainScreen from './Main'
import JitsiMeetScreen from './JitsiMeet'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={"MAIN"} screenOptions={headerCommonsOptions}>
        <Stack.Screen name="MAIN" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const headerCommonsOptions = {
    headerStyle: {
        backgroundColor: UIStyles.blueColor,
    },
    headerTintColor: UIStyles.vomitColor,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

export default App;