const appReducer = (state , action)=>{
    switch(action.type){
        case "FANSTATE" :
            return {
                ...state,
                fanState : action.payload !== undefined ? action.payload : !state.fanState
            }
        case "PUMPSTATE" : 
            return {
                ...state,
                pumpState : action.payload !== undefined ? action.payload : !state.pumpState,
                
            }
        case "LEDSTATE" :
            return{
                ...state,
                ledState :  action.payload !== undefined ? action.payload : !state.ledState,
            }
        case "POWERSTATE" :
            return{
                ...state,
                powerState : action.payload !== undefined ? action.payload : !state.powerState,
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