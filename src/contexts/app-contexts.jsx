import { createContext, useContext, useReducer, useState } from "react";
import appReducer from "./app-reducer";
const AppContext = createContext();
const initialState = {
  fanState: false,
  pumpState: false,
  ledState: false,
  powerState: false,
  menuState: false
};
import React from "react";

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const changefanState = () => {
    dispatch({ type: "FANSTATE" });
  };
  const changepumpState = () => {
    dispatch({ type: "PUMPSTATE" });
  };
  const changeledState = () => {
    dispatch({ type: "LEDSTATE" });
  };
  const changepowerState = () => {
    dispatch({ type: "POWERSTATE" });
  };
  const changeMenuState = () => {
    dispatch({ type: "MENUTOGGLE" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        changefanState,
        changepumpState,
        changeledState,
        changepowerState,
        changeMenuState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };
