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
                lampState :  action.payload !== undefined ? action.payload : !state.lampState,
            }
        case "POWERSTATE" :
            return{
                ...state,
                valveState : action.payload !== undefined ? action.payload : !state.valveState,
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