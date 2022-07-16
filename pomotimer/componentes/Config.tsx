import {View, StyleSheet, TextInput, Text, Alert, DevSettings} from 'react-native'
import Configuracoe from '../classes/Configuracoes'

import AsyncStorage from '@react-native-async-storage/async-storage'



const Button = () => {
    const config = new Configuracoe()
    return(
        <View style={styleConfig.button} onTouchEnd={async () => {

            let string = config.getTimeWork()+" "+config.getTimePause()

            if(Number.parseInt(config.getTimeWork()) >= 5 && Number.parseInt(config.getTimePause()) >= 5){
                await AsyncStorage.setItem("times", string)
                Alert.alert("Aviso!", "Configurações salva com sucesso!\n\nSeu aplicativo será reiniciado em breve")
                setTimeout(() => {
                    DevSettings.reload()
                    }, 2000)
                
            }else{
                return Alert.alert("Aviso!", "Ambos os valores não podem ser inferior a 5")
            }

        }}>
            <Text style={styleConfig.textButton}>Salvar</Text>
        </View>
    )
}


const ConfigArea = () => {
    const config = new Configuracoe()
    return(
        <View style={styleConfig.container}>
            <View style={styleConfig.containerInput}>
                <Text style={styleConfig.textinput}>Definir tempo de produtividade</Text>
                <TextInput style={styleConfig.inputarea} keyboardType='numeric'onChangeText={(value) => {
                    const valueConverted = Number.parseInt(value)
                    config.setTimeWork(valueConverted)
                }}/>
            </View>
            <View style={styleConfig.containerInput}>
                <Text style={styleConfig.textinput}>Definir tempo de intervalo</Text>
                <TextInput style={styleConfig.inputarea} keyboardType='numeric' onChangeText={(value) => {
                    const valueConverted = Number.parseInt(value)
                    config.setTimePause(valueConverted)
                }}/>
            </View>
            <Button/>
        </View>
    )
}

const styleConfig = StyleSheet.create({
    container: {
        backgroundColor: "#313131",
        width: "100%",
        height:"100%",
        justifyContent: "center",
        alignItems: "center"
    },
    containerInput: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    inputarea: {
        backgroundColor: "#161616",
        color: "white",
        width: 200,
        borderRadius: 5
    },
    textinput: {
        color: "white",
        fontSize: 15
    },
    button: {
        width: 250,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
        borderRadius: 4,
        marginTop: 25,
    },
    textButton: {
        fontWeight: 'bold',
        color: "white",
        fontSize: 19
    }
})

export default ConfigArea