import * as React from 'react'
import { Button, View, Text } from 'react-native'
import { screens } from '../utils/constants'

const { MEET } = screens


export default ({navigation}) =>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate(MEET)}
      />
    </View>
