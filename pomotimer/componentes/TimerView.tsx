import react, {useState} from 'react'
import {View,Text, StyleSheet} from 'react-native'
import Timer from '../classes/Timer'

const TimerView = () => {

    const [timer, attTimer] = useState(Timer.getTimer())

    setInterval(() => {
            if(Timer.getTimer() !== 0 && Timer.getTimer() > 0){
                attTimer(Timer.getTimer())
            }else if(Timer.getTimer() === 0 && Timer.getTimerPause() > 0){
                attTimer(Timer.getTimerPause())
            }
        }, 1)

    return(
        <View style={timerScreen.container}>
            <Text style={timerScreen.text}>{timer}</Text>
        </View>
    )
}

const timerScreen = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    text: {
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontSize: 60,
        fontWeight: "bold",
        borderWidth: 3,
        borderRadius: 100,
        width: 200,
        height: 200,
        borderColor: "white"
    }
})

export default TimerView