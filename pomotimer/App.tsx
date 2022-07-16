import react from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Main from './componentes/Main';
import Config from './componentes/Config'
import Timer from './classes/Timer'
import Configuracoes from './classes/Configuracoes'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function App() {

  const Stack = createNativeStackNavigator()


  async function getConfig(){
    
    const config = new Configuracoes()

    await AsyncStorage.getItem("times").then((result) => { // Busca as configurações do usuário
      if(result){
        const resultado = result.split(" ")
        Timer.setTimer(Number.parseInt(resultado[0])) //Sendo o index 0 o tempo de produtividade
        Timer.setPause(Number.parseInt(resultado[1])) //Sendo o index 1 o tempo de pause
        config.setTimeWork(Number.parseInt(resultado[0]))
        config.setTimePause(Number.parseInt(resultado[1]))
      }
    })
  }

  getConfig()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Config" component={Config} options={{
          headerShown: true,
          headerTintColor: "white",
          headerTitle: "Configurações",
          headerTransparent: true
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



