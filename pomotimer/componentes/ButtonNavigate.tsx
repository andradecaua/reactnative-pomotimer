import react from 'react'
import { View, Text, StyleSheet } from 'react-native'

type props = {
    navigate: () => void,
    text: string
}

const ButtonNavigate = (props: props) => {
    return(
        <View style={styleButtonNavigate.container} onTouchEnd={props.navigate}>
            <Text style={styleButtonNavigate.text}>{props.text}</Text>
        </View>
    )
}

const styleButtonNavigate = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        borderRadius: 5,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    text: {
        textAlign: "left",
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        marginRight: "5%"
    }
})

export default ButtonNavigate