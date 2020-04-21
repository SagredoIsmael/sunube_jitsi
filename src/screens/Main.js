import * as React from 'react'
import { TouchableOpacity, Text, Image, StyleSheet, TextInput, View } from 'react-native'
import { screens, colors } from '../utils/constants'
const { MEET } = screens

export default ({ navigation }) => {
    const [textNameMeet, onChangeText] = React.useState('')
    return (
        <View style={styles.container}>
            <Image style={styles.waterMark} resizeMode="contain" source={require('../../img/watermark.png')} />
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
                    onPress={() => navigation.navigate(MEET,
                        {
                            meetId: textNameMeet
                        }
                    )}
                    underlayColor={colors.secondary}>
                    <Text style={styles.textButton}>IR</Text>
                </TouchableOpacity>
            }
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        alignItems: 'center',
    },
    waterMark: {
        width: '80%',
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
        height: '7%',
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
        borderColor: '#fff',
        marginBottom: '40%'
    }
});