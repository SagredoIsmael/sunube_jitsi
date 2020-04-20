import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './screens/Navigation'
import { StatusBar } from 'react-native'

export default () => 
<NavigationContainer>
<StatusBar hidden />
  <Navigation/>
</NavigationContainer>