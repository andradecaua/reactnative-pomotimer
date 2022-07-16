class Configuracoe{

    protected static initialTimeWork: {time: number, medida: string} = {time: 35, medida: "minutos"}
    protected static initialTimePause: {time: number, medida: string} = {time: 5, medida: "minutos"}


    public setTimeWork(time: number){
        Configuracoe.initialTimeWork.time = time
    }

    public setTimePause(time: number){
        Configuracoe.initialTimePause.time = time
    }


    public getTimeWork(){
        return Configuracoe.initialTimeWork.time.toString()
    }

    public getTimePause(){
        return Configuracoe.initialTimePause.time.toString()
    }


}

export default Configuracoe