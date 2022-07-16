import react from 'react'
import { View, Text, StyleSheet } from 'react-native'

type props = {
    function: () => void | void,
    text: string
}

const ButtonTimer = (props: props) => {
    return(
        <View style={styleButtonsTimer.container} onTouchEnd={props.function}>
            <Text style={styleButtonsTimer.text}>{props.text}</Text>
        </View>
    )
}

const styleButtonsTimer = StyleSheet.create({
    container: {
        width: 80,
        height: 80,
        borderRadius: 5,
        backgroundColor: "green",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
})

export default ButtonTimer