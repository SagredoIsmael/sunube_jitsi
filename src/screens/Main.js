import * as React from 'react'
import { TouchableOpacity, Text, Image, StyleSheet, TextInput } from 'react-native'
import { screens, colors } from '../utils/constants'
import LinearGradient from 'react-native-linear-gradient'
const { MEET } = screens


export default ({ navigation }) => {
    const [textNameMeet, onChangeText] = React.useState('')
    return (
        <LinearGradient colors={colors.gradient} style={styles.container}>
            <Image style={styles.waterMark} source={require('../../img/watermark.png')} />
            <Text style={styles.text}>Seguro, lleno de funcionalidades y videoconferencias completamente gratuitas</Text>
            <TextInput
                style={styles.inputText}
                onChangeText={text => onChangeText(text)}
                value={textNameMeet}
                placeholder={"Comenzar una reunión"}
                placeholderTextColor={'white'}
            />
            {
                textNameMeet != '' &&
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate(MEET)} underlayColor={colors.secondary}>
                    <Text style={styles.textButton}>IR</Text>
                </TouchableOpacity>
            }


        </LinearGradient>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    waterMark: {
        width: '80%',
        height: '20%',
    },
    text: {
        textAlign: 'center',
        margin: '10%',
        marginBottom: '15%',
        color: 'white',
        fontWeight: "bold",
        fontSize: 17
    },
    textButton: {
        textAlign: 'center',
        margin: '5%',
        color: colors.primary,
        fontWeight: "bold",
        fontSize: 17
    },
    inputText: {
        width: '75%',
        marginBottom: '10%',
        borderColor: 'white',
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 17,
        color: 'white'
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    }
});