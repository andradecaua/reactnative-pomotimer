import {Alert, Vibration} from 'react-native'

export function AlertCustom(title: string, message: string){
    Alert.alert(title, message)
    Vibration.vibrate(2000)
}