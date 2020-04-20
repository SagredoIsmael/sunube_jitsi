import * as React from 'react'
import { Button, Text, Image, StyleSheet } from 'react-native'
import { screens, colors } from '../utils/constants'
import LinearGradient from 'react-native-linear-gradient'

const { MEET } = screens


export default ({ navigation }) =>
    <LinearGradient colors={colors.gradient} style={styles.container}>
        <Image style={styles.waterMark} source={require('../../img/watermark.png')} />

        <Text>Main Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate(MEET)}
        />
    </LinearGradient>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    waterMark: {
        marginTop: '25%',
        width: '80%',
        height: '20%',
    },
    logo: {
        width: 66,
        height: 58,
    },
});