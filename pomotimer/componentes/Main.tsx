import react,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ButtonTimer from '../componentes/ButtonsTimer';
import ButtonNavigate from '../componentes/ButtonNavigate';
import TimerView from '../componentes/TimerView'

import Timer from '../classes/Timer'

const Main = ({navigation}: {navigation: any}) => {
    return(
        <View style={styleMain.containerMain}>      
        <StatusBar style='light'/>

        <View style={styleMain.containerConfig}>
          <ButtonNavigate navigate={() => {
            navigation.navigate("Config")
          }} text="Configurações"/>
        </View>

        <View style={styleMain.containerTimerScreen}>
          <TimerView/>
        </View>

        <View style={styleMain.containerMainButton}>
                  
            <View style={styleMain.containerButton}>

                <ButtonTimer function={Timer.startTimer} text="Start"/>

                <ButtonTimer function={Timer.stopTimer} text="Stop"/>

            </View>

            <View style={styleMain.containerButton}>

                <ButtonTimer function={Timer.aumentarTimer} text="+5"/>
                <ButtonTimer function={Timer.diminuirTimer} text="-5"/>

            </View>

        </View>

      </View>
    )
}

const styleMain = StyleSheet.create({
    containerMain: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#313131"
    },
    containerMainButton: {
        width: "100%",
        height: "30%",
        justifyContent: "space-around"
    },
    containerTimerScreen: {
      flex: 1,
      width: "100%",
      flexDirection: 'column',
      justifyContent: "space-around",
    },
    containerButton: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    containerConfig: {
      width: "100%"
    }
  })

  export default Main