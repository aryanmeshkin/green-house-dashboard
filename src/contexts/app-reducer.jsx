const appReducer = (state , action)=>{
    switch(action.type){
        case "FANSTATE" :
            return {
                ...state,
                fanState : !state.fanState
            }
        case "PUMPSTATE" : 
            return {
                ...state,
                pumpState : !state.pumpState
                
            }
        case "LEDSTATE" :
            return{
                ...state,
                ledState : !state.ledState
            }
        case "POWERSTATE" :
            return{
                ...state,
                powerState : !state.powerState
            }
        case "MENUTOGGLE" :
            return{
                ...state,
                menuState : !state.menuState
            }
        case "MODE" :
            return{
                ...state,
                modeState : !state.modeState
            }
    }
}
export default appReducer