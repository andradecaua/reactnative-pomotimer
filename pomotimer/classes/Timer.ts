import {AlertCustom} from '../alert/alert'
import Configuracoes from './Configuracoes'

class Timer extends Configuracoes {

    private static timerWork: number = Configuracoes.initialTimeWork.time;
    private static medida: number = 60000;
    private static timerPause: number = Configuracoes.initialTimePause.time;
    private static initValuePause: number;
    private static initValue: number;
    private static timeoutid: any;
    private static active: boolean = false;

    public static setTimer(timer: number){
        this.timerWork = timer
    }


    public static setPause(pause: number){
        this.timerPause = pause
    }

    public static getTimer(){
         return this.timerWork;
    }

    public static getTimerPause(){
        return this.timerPause
    }

    public static startTimer(){
        Timer.initValue = Configuracoes.initialTimeWork.time
        Timer.initValuePause = Configuracoes.initialTimePause.time
        if(Timer.active === false){
            Timer.active = true
            Timer.timeoutid = setInterval(() => {
                Timer.timerWork-=1
                if(Timer.timerWork === 0){
                    Timer.timerPause = Timer.initValuePause
                    AlertCustom("Hora da pausa!", "Vamos descansar um pouco e logo voltamos!")
                    Timer.startPause()
                }
            }, Timer.medida)
        }
        else{
            return
        }
    }

    public static startPause(){
        clearInterval(Timer.timeoutid)
        Timer.timeoutid = setInterval(() => {
            Timer.timerPause-=1
            if(Timer.timerPause === 0){
                Timer.timerWork = Timer.initValue
                Timer.active = false
                AlertCustom("De volta ao trabalho", "Chega de descanso e mão na massa!")
                clearInterval(Timer.timeoutid)
                Timer.startTimer()
            }
        }, Timer.medida)
    }

    public static stopTimer(){
       if(Timer.active === true){
            clearInterval(Timer.timeoutid)
            Timer.timerWork = Timer.initValue
            Timer.timerPause = Timer.initValuePause
            Timer.active = false
       }
    }

    public static aumentarTimer(){
        if(Timer.active === false){
            Timer.timerWork+=5.00
            Timer.initValue = Timer.timerWork
        }
    }

    public static diminuirTimer(){
        if(Timer.active === false){
            if(Timer.timerWork <= 5){
                Timer.timerWork = 5.00
                Timer.initValue = Timer.timerWork
                return;
            }
            Timer.timerWork-=5.00
            return Timer.initValue = Timer.timerWork
        }
    }

}

export default Timer;